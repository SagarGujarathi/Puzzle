import '../css/Round1.css'
import round51 from '../images/round51.jpeg'
import round52 from '../images/round52.jpeg'
import round53 from '../images/round53.jpeg'
import round54 from '../images/round54.jpeg'
import round5a from '../images/round5a.jpeg'
import Swal from 'sweetalert2'
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
import { Link, useNavigate } from 'react-router-dom'

function Round5({ points, setPoints, storePoints }) {
    const navigate = useNavigate()
    const itemData = [
        {
            img: round51,
        },
        {
            img: round52,
        },
        {
            img: round53,
        },
        {
            img: round54,
        }
    ];
    let temp = [1, 2, 3, 4, 5];
    function doneGame() {
        storePoints()
        Swal.fire({
            title: 'Congrats',
            text: 'Puzzle completed!'
        })
            .then(result => {
                if (result.isConfirmed) {

                    navigate('/')
                }
            })
    }
    return (
        <>
            <div className='playground-heading'>which patterned block goes in the fourth spot?  </div>
            <div className="round1">
                <img src={round5a} className='victim' />
                <div className="image-card">
                    {itemData.map((item) => {
                        return (
                            (item.img == round51) ?
                                <div className="image-item" onClick={() => {
                                    setPoints(p => p + 1)
                                    doneGame()
                                }}>
                                    <img src={item.img} />
                                </div>
                                :
                                <div className="image-item" onClick={() => {
                                    doneGame()
                                }}>
                                    <img src={item.img} />
                                </div>
                        )
                    })}
                </div>
            </div >
            <div className="footer"></div>
        </>
    )
}

export default Round5