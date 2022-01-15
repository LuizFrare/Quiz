import styles from '../styles/Result.module.css'
import Stats from '../components/Stats'
import { useRouter } from "next/router"
import Button from '../components/Button'

export default function Result() {

    const router = useRouter()

    const total = +router.query.total
    const correct = +router.query.correct
    const percent = Math.round((correct / total) * 100)

    return (
        <div className={styles.result}>
            <h1>Resultado</h1>
            <div className={styles.statsBox}>
                <Stats description="Perguntas" bgColor='#ff79c6' value={total}/>
                <Stats description="Corretas" bgColor='#50fa7b' value={correct}/>
                <Stats description="Percentual" bgColor='#8be9fd' value={`${percent}%`}/>
            </div>
            <div className={styles.btn}>
                <Button  href="/" text="Voltar para a página inicial"/>
            </div>
        </div>
    )
}