import styles from '../styles/Stats.module.css'

interface StatsProps {
    value: any
    description: string
    bgColor?: string
    fontColor?: string
}

export default function Stats(props: StatsProps) {
    return (
        <div className={styles.stats}>
            <div className={styles.value} style={{
                backgroundColor: props.bgColor ?? '#fdd50f',
                color: props.fontColor ?? '#fafafa'
            }}>
                {props.value}
            </div>
            <div className={styles.description}>
                {props.description}
            </div>
        </div>
    )
}