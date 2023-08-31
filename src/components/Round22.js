import React from 'react'
import '../css/round2.css'
import { Link } from 'react-router-dom'
import parking from '../images/parking.png'
function round22({ setPoints }) {
    return (
        <>
            <div className='playground-heading'>2. What is the number of parking space covered by the car?</div>
            <div className="round2-1" style={{ alignItems: 'center' }}>
                <img src={parking} alt="Wait for the image to load" className='parking' />
            </div>
            <div className="options-box">
                <Link to='/round2/q3' className="option links">
                    <div>b) &nbsp;&nbsp;&nbsp;&nbsp;100</div>
                </Link>
                <Link to='/round2/q3' className="option links">
                    <div onClick={() => setPoints(p => p + 1)}>d) &nbsp;&nbsp;&nbsp;&nbsp;87</div>
                </Link>
                <Link to='/round2/q3' className="option links">
                    <div>c) &nbsp;&nbsp;&nbsp;&nbsp;90</div>
                </Link>
                <Link to='/round2/q3' className="option links">
                    <div>a) &nbsp;&nbsp;&nbsp;&nbsp;85</div>
                </Link>
            </div>
        </>
    )
}

export default round22