import { Link } from 'react-router-dom'
import '../css/round2.css'
function Round2({ setPoints }) {
    return (
        <>
            <div className='playground-heading'>4. How many countries were participated as founding member of United Nation?</div>
            <div className="round2-1">
            </div>
            <div className="options-box">
                <Link to='/round5' className="option links">
                    <div>a) &nbsp;&nbsp;&nbsp;&nbsp;45</div>
                </Link>
                <Link to='/round5' className="option links">
                    <div>b) &nbsp;&nbsp;&nbsp;&nbsp;50</div>
                </Link>
                <Link to='/round5' className="option links">
                    <div onClick={() => setPoints(p => p + 1)}>c) &nbsp;&nbsp;&nbsp;&nbsp;51</div>
                </Link>
                <Link to='/round5' className="option links">
                    <div>d) &nbsp;&nbsp;&nbsp;&nbsp;75</div>
                </Link>


            </div>
        </>
    )
}

export default Round2