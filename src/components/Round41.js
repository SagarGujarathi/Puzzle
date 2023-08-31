import React from 'react'
import { Link } from 'react-router-dom'
import '../css/round2.css'
function Round2({ setPoints }) {
    return (
        <>
            <div className='playground-heading'>1. Which one is the smallest ocean in the world?</div>
            <div className="round2-1">
            </div>
            <div className="options-box">
                <Link to='/round4/Q2' className="option links">
                    <div>a) &nbsp;&nbsp;&nbsp;&nbsp;Indian</div>
                </Link >
                <Link to='/round4/Q2' className="option links">
                    <div>b) &nbsp;&nbsp;&nbsp;&nbsp;Pacific</div>
                </Link >
                <Link to='/round4/Q2' className="option links">
                    <div>c) &nbsp;&nbsp;&nbsp;&nbsp;Atlantic</div>
                </Link >
                <Link to='/round4/Q2' className="option links">
                    <div onClick={() => setPoints(p => p + 1)}>d) &nbsp;&nbsp;&nbsp;&nbsp;Arctic</div>
                </Link >
            </div >
        </>
    )
}

export default Round2