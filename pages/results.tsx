import styles from '../styles/Result.module.css'
import Stats from '../components/Stats'
import { useRouter } from "next/router"
import Button from '../components/Button'

export default function Result() {

    const router = useRouter()

    const total = +router.query.total
    const correct = +router.query.correct
    const percent = Math.round((correct / total) * 100)

    return(
        <div className={styles.result}>
            <h1>Resultado</h1>
            <div style={{display:"flex"}}>
                <Stats description="Perguntas" bgColor='#FFE1AF' value={total}/>
                <Stats description="Corretas" bgColor='#C6D57E' value={correct}/>
                <Stats description="Percentual" bgColor='#A2CDCD' value={`${percent}%`}/>
            </div>
            <Button href="/" text="Voltar para a página inicial"/>
        </div>
    )
}