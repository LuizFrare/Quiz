import styles from '../styles/Answer.module.css'
import AnswerModel from "../model/answer ";

interface PropsAnswer {
    value: AnswerModel
    index: number
    option: string
    bgColor: string
    onResponse: (index: number) => void
}

export default function Answer(props: PropsAnswer) {
    const answer = props.value
    const revealedAnswer = answer.revealed ? styles.revealedAnswer : ''
    return (
        <div className={styles.answer}
        onClick={() => props.onResponse(props.index)}>
            <div className={`${revealedAnswer} ${styles.AnswerContent}`}>

                    <div className={styles.front}>
                    <div className={styles.option}
                         style={{backgroundColor: props.bgColor}}>
                        <p>{props.option}</p>
                    </div>
                    <div className={styles.value}>
                        {answer.value}
                    </div>
                    </div>
                    <div className={styles.back}>
                    {answer.correct ? (
                        <div className={styles.correct}>
                            <div>A resposta correta é...</div>
                            <div className={styles.textContent}>{answer.value}</div>
                        </div>
                    ) : (
                        <div className={styles.incorrect}>
                            <div>A resposta selecionada é incorreta</div>
                            <div className={styles.textContent}>{answer.value}</div>
                        </div>
                    )}    
                </div>
            </div>
        </div>
    )
}