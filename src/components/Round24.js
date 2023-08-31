import React from 'react'
import { Link } from 'react-router-dom'
import '../css/round2.css'
function Round2({ setPoints }) {
    return (
        <>
            <div className='playground-heading'>4. If 72 x 96 = 6927, 58 x 87 = 7885, then 79 x 86 = ?</div>
            <div className="round2-1">
            </div>
            <div className="options-box">
                <Link to='/round3' className="option links">
                    <div onClick={() => setPoints(p => p + 1)}>a) &nbsp;&nbsp;&nbsp;&nbsp;6897</div>
                </Link>
                <Link to='/round3' className="option links">
                    <div>b) &nbsp;&nbsp;&nbsp;&nbsp;7679</div>
                </Link>
                <Link to='/round3' className="option links">
                    <div>c) &nbsp;&nbsp;&nbsp;&nbsp;7345</div>
                </Link>
                <Link to='/round3' className="option links">
                    <div>d) &nbsp;&nbsp;&nbsp;&nbsp;9103</div>
                </Link>
            </div>
        </>
    )
}

export default Round2