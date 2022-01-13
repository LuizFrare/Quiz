import styles from "../styles/Question.module.css"
import QuestionModel from "../model/question";
import Statement from "./Statement";
import Answer from "./Answers";
import Timer from "./Timer";

const options = [
    { value: 'A', color:'#50ed57'},
    { value: 'B', color:'#ff79c6'},
    { value: 'C', color:'#8be9fd'},
    { value: 'D', color:'#f2843e'},
]

interface PropsQuestion {
    value: QuestionModel
    timeToAnswer?: number
    onResponse: (index: number) => void
    timeOut: () => void
}

export default function Question(props: PropsQuestion) {
    const question = props.value

    function RenderAnswer() {
        return question.answers.map((answer, i) => {
            return <Answer 
                key={`${question.id} - ${i}`}
                value={answer}
                index={i}
                option={options[i].value}
                bgColor={options[i].color}
                onResponse={props.onResponse}
            />
        })
    }

    return(
        <div className={styles.question}>
            <Statement text={question.statement} />
            <Timer key={question.id} length={props.timeToAnswer ?? 10} timeOut={props.timeOut} />
            {RenderAnswer()}
        </div>
    )
}