import shuffle from "../function/arrays"
import AnswerModel from "./answer "

export default class QuestionModel {
    #id: number
    #statement : string
    #answers: AnswerModel[]
    #gotIt: boolean

    constructor(id:number, statement: string, answers: AnswerModel[], gotIt = false ) {
        this.#id = id
        this.#statement = statement
        this.#answers = answers
        this.#gotIt = gotIt
    }

    get id() {
        return this.#id
    }

    get statement() {
        return this.#statement
    }
    
    get answers() {
        return this.#answers
    }
    
    get gotIt() {
        return this.#gotIt
    }

    get answered() {
        
        for(let answer of this.#answers) {
            if(answer.revealed) return true
        }

        return false
    }

    get notAnswered() {
        return !this.answered
    }

    answerWith(index: number): QuestionModel {
        const gotIt = this.#answers[index]?.correct
        const answers = this.#answers.map((answer, i) => {
            const selectedAnswer = index === i
            const mustReveal = selectedAnswer || answer.correct
            return mustReveal ? answer.reveal() : answer
        })
        return new QuestionModel(this.#id, this.#statement, answers, gotIt)
    }

    shuffleAnswers(): QuestionModel {
        let shuffledAnswers = shuffle(this.#answers)
        return new QuestionModel(this.#id, this.#statement, shuffledAnswers, this.#gotIt)
    }
    
    toObject() {
        return {
            id: this.#id,
            statement : this.#statement,
            answers: this.#answers.map(answ => answ.toObject()),
            answered: this.answered,
            gotIt: this.#gotIt,
        }
    }

    static fromObject(model: QuestionModel): QuestionModel {
        const answers = model.answers.map(answ => AnswerModel.fromObject(answ))
        return new QuestionModel(model.id, model.statement, answers, model.gotIt)
    }
}