import styles from '../styles/Statement.module.css'

interface PropsStatement {
    text: string
}

export default function Statement(props: PropsStatement) {
    return(
        <div className={styles.statement}>
            <div className={styles.text}>
                {props.text}
            </div>
        </div>
    )
}