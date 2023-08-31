import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faCircleCheck, faPuzzlePiece, faBrain, faRankingStar } from '@fortawesome/free-solid-svg-icons'
import '../css/Playground.css'
import { Link } from 'react-router-dom'
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
function Playground({ points, setPoints }) {
    let temp = [1, 2, 3, 4, 5];
    return (
        <>
            <div className="playground-heading">Your analytics</div>
            <div className="analytics-container">
                <div className="analytics-item">
                    <FontAwesomeIcon icon={faStar} className='analytics-icon' style={{ color: '#FFA116' }} />
                    <span className='analytics-heading'  >Overall game score</span>
                    <span className='analytics-answer'>50</span>
                </div>
                <div className="analytics-item" >
                    <FontAwesomeIcon icon={faCircleCheck} className='analytics-icon' style={{ color: '#2CBB5D' }} />
                    <span className='analytics-heading'>Total puzzles solved</span>
                    <span className='analytics-answer'>{points}/5</span>
                </div>
                <div className="analytics-item">
                    <FontAwesomeIcon icon={faPuzzlePiece} className='analytics-icon' style={{ color: '#F15918' }} />
                    <span className='analytics-heading'>Overall score obtained</span>
                    <span>
                        {
                            temp.map((e, index) => {
                                if (index + 1 <= points) {
                                    return <StarIcon className='stars' />
                                }
                            })
                        }
                        {
                            temp.map((e, index) => {
                                if (index + 1 > points) {
                                    return <StarBorderIcon className='stars' />
                                }
                            })
                        }
                    </span>
                    <span className='analytics-answer'>{points * 10}</span>
                </div>
                <div className="analytics-item">
                    <FontAwesomeIcon icon={faRankingStar} className='analytics-icon' style={{ color: '87CBB9' }} />
                    <span className='analytics-heading'>Level</span>
                    <span className='analytics-answer'>{(points >= 5) ? 'Expert' : (points >= 2) ? 'Intermediate' : 'Beginner'}</span>
                </div>
                <div className="analytics-item">
                    <MilitaryTechIcon className='analytics-icon' style={{ fontSize: '3.5rem', color: '#F2CD5C' }} />
                    <span className='analytics-heading'>Rank india wise </span>
                    <span className='analytics-answer'>30</span>
                </div>
            </div>
            <div className="footer">
                <Link to='/startgame'>
                    <button className='play-game' onClick={() => setPoints(0)}>
                        <FontAwesomeIcon icon={faBrain} />
                        &nbsp;
                        Start solving
                    </button>
                </Link>
            </div></>
    )
}

export default Playground