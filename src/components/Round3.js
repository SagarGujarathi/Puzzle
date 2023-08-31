import { Link } from 'react-router-dom'
import '../css/round2.css'

function Round3({ setPoints }) {

    return (
        <>
            <div className='playground-heading'>What is the text colour?</div>
            <div className="round2-1" style={{ backgroundColor: 'green', fontSize: '3rem', alignItems: 'center', color: 'blue', borderRadius: '10px' }}>
                RED
            </div>
            <div className="options-box">
                <Link to='/round4/Q1' className="option links">
                    <div onClick={() => setPoints(p => p + 1)}>a) &nbsp;&nbsp;&nbsp;&nbsp;Red</div>
                </Link>
                <Link to='/round4/Q1' className="option links">
                    <div>b) &nbsp;&nbsp;&nbsp;&nbsp;Blue</div>
                </Link>
                <Link to='/round4/Q1' className="option links">
                    <div>c) &nbsp;&nbsp;&nbsp;&nbsp;Green</div>
                </Link>
                <Link to='/round4/Q1' className="option links">
                    <div>d) &nbsp;&nbsp;&nbsp;&nbsp;Red and Blue</div>
                </Link>
            </div>
        </>
    )

}

export default Round3