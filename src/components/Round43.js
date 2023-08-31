import React from 'react'
import { Link } from 'react-router-dom'
import '../css/round2.css'
function Round2({ setPoints }) {
    return (
        <>
            <div className='playground-heading'>3. Which plateau is known as 'Roof of the World'?</div>
            <div className="round2-1">
            </div>
            <div className="options-box">
                <Link to='/round4/Q4' className="option links">
                    <div>a) &nbsp;&nbsp;&nbsp;&nbsp;Andes</div>
                </Link>
                <Link to='/round4/Q4' className="option links">
                    <div>b) &nbsp;&nbsp;&nbsp;&nbsp;Himalaya</div>
                </Link>
                <Link to='/round4/Q4' className="option links">
                    <div>c) &nbsp;&nbsp;&nbsp;&nbsp;Karakoram</div>
                </Link>
                <Link to='/round4/Q4' className="option links">
                    <div onClick={() => setPoints(p => p + 1)}>d) &nbsp;&nbsp;&nbsp;&nbsp;Pamir</div>
                </Link>
            </div>
        </>
    )
}

export default Round2