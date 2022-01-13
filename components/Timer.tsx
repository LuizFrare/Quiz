import styles from '../styles/Timer.module.css'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'

interface TimerProps {
    key: any
    length: number
    timeOut: () => void
}

export default function Timer(props: TimerProps) {
    return (
        <div className={styles.timer}>
            <CountdownCircleTimer
                size={120}
                duration={props.length}
                isPlaying
                onComplete={props.timeOut}
                colors={[
                    '#2dc570',
                    '#fcc24f',
                    '#ff5555',
                ]}
                colorsTime={[
                    7, 5, 0
                ]}
            >
                {({ remainingTime }) => remainingTime}
            </CountdownCircleTimer>
        </div>
    )
}