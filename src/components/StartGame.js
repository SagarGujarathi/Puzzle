import { useEffect, useState } from 'react'
import { Button } from '@mui/material'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-solid-svg-icons'
import '../css/startGame.css'
function StartGame() {
    let button = []
    const [time, setTime] = useState({ min: 5, sec: 0 })
    useEffect(() => {
        const timer = setInterval(() => {
            setTime((oldTime) => {
                if (oldTime.min == 0 && oldTime.sec == 0) {
                    return { ...oldTime }
                }
                if (oldTime.sec == 0) {
                    return { min: oldTime.min - 1, sec: 59 }
                }
                else {
                    return { min: oldTime.min, sec: oldTime.sec - 1 }
                }
            })
        }, 1000)
        return () => clearInterval(timer);
    }, [])
    for (let i = 0; i < 144; i++) {
        button.push(
            (i == 21) ? <Link to='/round1'>
                <Button variant='contained'>{(i == 21) ? 'Logik' : 'Logic'}</Button>
            </Link>
                :
                <Button variant='contained'>{(i == 21) ? 'Logik' : 'Logic'}</Button>
        )
    }
    return (
        <>
            <div className="playground-heading">
                Identify the wrong spelled word to start the game
            </div>
            <div className="analytics-container" style={{ gap: '10px', padding: '1rem' }}>
                {button}
            </div >
            <div className="footer" style={{ padding: '0 2rem' }}>
                <div className="timer">
                    <FontAwesomeIcon icon={faClock} /> &nbsp;
                    {`${(time.min < 10) ? `0${time.min}` : time.min} : ${(time.sec < 10) ? `0${time.sec}` : time.sec} `}
                </div>
            </div>
        </>
    )
}

export default StartGame