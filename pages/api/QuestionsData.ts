import AnswerModel from "../../model/answer ";
import QuestionModel from "../../model/question";

const questions: QuestionModel[] = [
    new QuestionModel(1, 'Qual o significado da palavra "cataclismo"?', [
        AnswerModel.incorrect('Morte rápida'),
        AnswerModel.incorrect('Racismo'),
        AnswerModel.incorrect('Formigar'),
        AnswerModel.correct('Catástrofe'),
    ]),

    new QuestionModel(2, 'Qual a capital da Austrália?', [
        AnswerModel.incorrect('Sydney'),
        AnswerModel.incorrect('Melbourne'),
        AnswerModel.incorrect('Brisbane'),
        AnswerModel.correct('Camberra'),
    ]),

    new QuestionModel(3, 'Qual o país com mais pirâmides no mundo?', [
        AnswerModel.incorrect('Egito'),
        AnswerModel.incorrect('México'),
        AnswerModel.incorrect('Peru'),
        AnswerModel.correct('Sudão'),
    ]),

    new QuestionModel(4, 'Qual a ciência que estuda os seres vivos?', [
        AnswerModel.incorrect('Química'),
        AnswerModel.incorrect('Física'),
        AnswerModel.incorrect('Filosofia'),
        AnswerModel.correct('Biologia'),
    ]),

    new QuestionModel(5, 'Qual cientista inventou a formula E=mc²?', [
        AnswerModel.incorrect('Stephen Hawking'),
        AnswerModel.incorrect('Nikola Tesla'),
        AnswerModel.incorrect('Marie Curie'),
        AnswerModel.correct('Albert Einstein'),
    ]),

    new QuestionModel(6, 'Qual destes foi o criador da teoria da evolução das espécies?', [
        AnswerModel.incorrect('Michael Jacksson'),
        AnswerModel.incorrect('Leonardo DaVinci'),
        AnswerModel.incorrect('Sigmund Fried'),
        AnswerModel.correct('Charles Darwin'),
    ]),

    new QuestionModel(7, 'Quem escreveu Dom Casmurro?', [
        AnswerModel.incorrect('Machado de Madeira'),
        AnswerModel.incorrect('José de Alencar'),
        AnswerModel.incorrect('Jorge Amado'),
        AnswerModel.correct('Machado de Assis'),
    ]),

    new QuestionModel(8, 'Qual destes é um filósofo grego?', [
        AnswerModel.incorrect('Daniel Orivaldo da Silva'),
        AnswerModel.incorrect('Francis Bacon'),
        AnswerModel.incorrect('William Shakespeare'),
        AnswerModel.correct('Platão'),
    ]),

    new QuestionModel(9, 'Qual país dentre estes faz parte da América Central?', [
        AnswerModel.incorrect('Congo'),
        AnswerModel.incorrect('Costa do Marfim'),
        AnswerModel.incorrect('itália'),
        AnswerModel.correct('Jamaica'),
    ]),

    new QuestionModel(10, 'Em qual ano o português Pedro Álvares Cabral chegou ao Brasil', [
        AnswerModel.incorrect('1703'),
        AnswerModel.incorrect('2010'),
        AnswerModel.incorrect('1100'),
        AnswerModel.correct('1500'),
    ]),
]

export default questions