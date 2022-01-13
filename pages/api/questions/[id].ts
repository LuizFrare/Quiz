import questions from '../QuestionsData'

export default (req, res)  => {
    const selectedId = +req.query.id

    const variableValueQuestion = questions.filter(question => question.id === selectedId)

    if(variableValueQuestion.length === 1) {
      const selectedQuestion = variableValueQuestion[0].shuffleAnswers()
      res.status(200).json(selectedQuestion.toObject())
    } else {
      res.status(204).send()
    }

    res.status(200).json(questions[0].toObject())
  }
  