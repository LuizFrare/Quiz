import styles from '../styles/Rules.module.css'
import Link from 'next/link'

export default function Rules() {
    return(
        <main className={styles.rules}>
           <div className={styles.container}>
                <h1>Regras do Quiz</h1>
                <li>
                    Há 10 perguntas no teste
                </li>
                <li>
                    O tema das interrogações é variado
                </li>
                <li>
                    Você terá 8 segundos para responder cada questão
                </li>
                <li>
                    Para avançar ao responder um questionamento, basta clicar em {`"próximo"`}
                </li>
                <li>
                    Ao fim das dez perguntas, clique em {`"Terminar"`}
                </li>

                <Link passHref href="/"><button className={styles.goHome}>Voltar</button></Link>
            </div>
        </main>
    )
}