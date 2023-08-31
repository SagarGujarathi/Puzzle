import React from 'react'
import { Link } from 'react-router-dom'
import '../css/round2.css'
function Round2({ setPoints }) {
    return (
        <>
            <div className='playground-heading'>1. Here are some fun, tricky and hard to solve maths problems that will challenge your thinking ability.</div>
            <div className="round2-1">
                1. If 1=3
                <br />
                2=3
                <br />
                3=5
                <br />
                4=4
                <br />
                5=4
                <br />
                Then, 6=?
            </div>
            <div className="options-box">
                <Link to='/round2/Q2' className="option links" >
                    <div onClick={() => setPoints(p => p + 1)}>a) &nbsp;&nbsp;&nbsp;&nbsp;Three</div>
                </Link>
                <Link to='/round2/Q2' className="option links" >
                    <div >b) &nbsp;&nbsp;&nbsp;&nbsp;Four</div>
                </Link>
                <Link to='/round2/Q2' className="option links" >
                    <div >c) &nbsp;&nbsp;&nbsp;&nbsp;Two</div>
                </Link>
                <Link to='/round2/Q2' className="option links" >
                    <div >d) &nbsp;&nbsp;&nbsp;&nbsp;Five</div>
                </Link>

            </div>
        </>
    )
}

export default Round2