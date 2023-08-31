import React from 'react'
import { Link } from 'react-router-dom'
import '../css/round2.css'
function Round2({ setPoints }) {
    return (
        <>
            <div className='playground-heading'>2. Which country gifted the 'Statue of Liberty' to USA in 1886?</div>
            <div className="round2-1">
            </div>
            <div className="options-box">
                <Link to='/round4/Q3' className="option links">
                    <div onClick={() => setPoints(p => p + 1)}>a) &nbsp;&nbsp;&nbsp;&nbsp;France</div>
                </Link>
                <Link to='/round4/Q3' className="option links">
                    <div>b) &nbsp;&nbsp;&nbsp;&nbsp;Canada</div>
                </Link>
                <Link to='/round4/Q3' className="option links">
                    <div>c) &nbsp;&nbsp;&nbsp;&nbsp;Brazil</div>
                </Link>
                <Link to='/round4/Q3' className="option links">
                    <div>d) &nbsp;&nbsp;&nbsp;&nbsp;England</div>
                </Link>
            </div>
        </>
    )
}

export default Round2