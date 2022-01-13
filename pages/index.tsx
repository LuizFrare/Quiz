import styles from '../styles/Index.module.css'
import { useRouter } from 'next/router'

export default function Home() {
    return(
        <main className={styles.index}>
            <div className={styles.text}>
               <div>
                    <h1 className={styles.title}> O MELHOR QUIZ</h1>
                </div>

                <div className={styles.subtitle}>
                    <h2>DE TODOS OS TEMPOS!</h2>
                </div> 
            </div>
            
            <div className={styles.buttons}>
                <button className={styles.play}>Jogar</button>
                <button className={styles.rules}>Regras</button>
            </div>

            <div className={styles.Copyright}>
                <p>Copyright ® 2021 Luiz Eduardo Frare</p>
                <p>Todos os direitos reservados</p>
            </div>
            
            
        </main>
    )
}
