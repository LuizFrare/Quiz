import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Quiz from '../components/Quiz'
import QuestionModel from '../model/question'

const BASE_URL = 'https://quiz-fawn.vercel.app'

export default function Game() {
  const router = useRouter()
  
  const [questionsIndex, setQuestionsIndex] = useState<number[]>([])
  const [question, setQuestion] = useState<QuestionModel>()
  const [correctAnswers, setCorrectAnswers] = useState<number>(0)

  async function loadIndexQuestions() {
    const resp = await fetch(`${BASE_URL}/questionnaire`)
    const questionsIndex = await resp.json()
    setQuestionsIndex(questionsIndex)
  }

  async function loadQuestions(indexQuestion: number) {
    const resp = await fetch(`${BASE_URL}/questions/${indexQuestion}`)
    const json = await resp.json()
    const newQuestion = QuestionModel.fromObject(json)
    setQuestion(newQuestion)
  }

  useEffect(() => {
    loadIndexQuestions()
  }, [])

  useEffect(() => {
    questionsIndex.length > 0 && loadQuestions(questionsIndex[0])
  }, [questionsIndex])

  function answeredQuestion(answeredQuestion: QuestionModel) {  
      setQuestion(answeredQuestion)
      const gotIt = answeredQuestion.gotIt
      setCorrectAnswers(correctAnswers + (gotIt ? 1 : 0))
  }

  function nextQuestionIndex() {
    const nextId = questionsIndex.indexOf(question.id) + 1
    return questionsIndex[nextId]
  }

  function nextStep() {
    const nextIndex = nextQuestionIndex()
    nextIndex ? goNextQuestion(nextIndex) : finish()
  }

  function goNextQuestion(nextIndex: number) {
    loadQuestions(nextIndex)
  }

  function finish() {
    router.push({
      pathname: '/results',
      query: {
        total: questionsIndex.length,
        correct: correctAnswers
      }
    })
  }

  return question ? (
    <div>
      <Quiz
       question={question}
       last={nextQuestionIndex() === undefined}
       answeredQuestion={answeredQuestion}
       nextStep={nextStep} />
    </div>
  ) : false
}
