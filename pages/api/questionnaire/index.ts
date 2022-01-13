import shuffle from "../../../function/arrays"
import questions from "../QuestionsData"

export default (req, res) => {
    const ids = questions.map(questions => questions.id)
    res.status(200).json(shuffle(ids))
}