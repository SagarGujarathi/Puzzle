import React from 'react'
import '../css/round2.css'
import { Link } from 'react-router-dom'
import Q3 from '../images/Q3.png'
function round22({ setPoints }) {
    return (
        <>
            <div className='playground-heading'>3. Replace the question mark in the above problem with the appropriate number.</div>
            <div className="round2-1" style={{ alignItems: 'center' }}>
                <img src={Q3} alt="Wait for the image to load" className='parking' style={{ width: '30%' }} />
            </div>
            <div className="options-box">
                <Link to='/round2/q4' className="option links">
                    <div>a) &nbsp;&nbsp;&nbsp;&nbsp;10</div>
                </Link>
                <Link to='/round2/q4' className="option links">
                    <div>b) &nbsp;&nbsp;&nbsp;&nbsp;9</div>
                </Link>
                <Link to='/round2/q4' className="option links">
                    <div onClick={() => setPoints(p => p + 1)}>c) &nbsp;&nbsp;&nbsp;&nbsp;6</div>
                </Link>
                <Link to='/round2/q4' className="option links">
                    <div>d) &nbsp;&nbsp;&nbsp;&nbsp;7</div>
                </Link>
            </div>
        </>
    )
}

export default round22