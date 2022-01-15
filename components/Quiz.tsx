import styles from '../styles/Quiz.module.css'
import QuestionModel from "../model/question";
import Question from './Question';
import Button from './Button';

interface QuizProps {
    question: QuestionModel
    last: boolean
    answeredQuestion: (question: QuestionModel) => void
    nextStep: () => void
}

export default function Quiz(props: QuizProps) {

    function onResponse(index: number) {
        if(props.question.notAnswered) {
            props.answeredQuestion(props.question.answerWith(index))
        }
    }

    return(
        <div className={styles.quiz}>
            {props.question ?
                <Question 
                value={props.question}
                timeToAnswer={120}
                onResponse={onResponse}
                timeOut={props.nextStep}/> : false
            }
            
            <Button text={props.last ? 'Terminar' : 'Próxima'} onClick={props.nextStep} />
        </div>
    )
}