import styles from '../styles/Index.module.css'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
    return(
        <main className={styles.index}>
            <Head>
            <link
             rel="stylesheet"
             href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
       />
            </Head>
            <div className={styles.text}>
               <div>
                    <h1 className={styles.title}> O MELHOR QUIZ</h1>
                </div>

                <div className={styles.subtitle}>
                    <h2>DE TODOS OS TEMPOS!</h2>
                </div> 
            </div>
            
            <div className={styles.buttons}>
            <Link passHref href="/game"><button className={styles.play}>Jogar</button></Link>
            <Link passHref href="/rules"><button className={styles.rules}>Regras</button></Link>
            </div>

            <div className={styles.Copyright}>
                <p>Copyright ® 2022 Luiz Eduardo Frare</p>
                <p className={styles.minusMargin}>Todos os direitos reservados</p>
            </div>
            
            <div className={`${styles.minusMargin} ${styles.github}`}>
                <Link passHref href="https://github.com/LuizFrare/"><i className="fab fa-github"></i></Link>
            </div>
        </main>
    )
}
