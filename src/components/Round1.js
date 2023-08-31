import '../css/Round1.css'
import round11 from '../images/round1-1.jpeg'
import round12 from '../images/round1-2.jpeg'
import round13 from '../images/round1-3.jpeg'
import round14 from '../images/round1-4.jpeg'
import round15 from '../images/round1-5.jpeg'
import round16 from '../images/round1-6.jpeg'
import murderer from '../images/murderer.jpeg'
import victim from '../images/victim.jpeg'
import { Link } from 'react-router-dom'

function Round1({ setPoints }) {
    const itemData = [
        {
            img: round11,
        },
        {
            img: round12,
        },
        {
            img: round13,
        },
        {
            img: round14,
        },
        {
            img: round15,
        },
        {
            img: round16,
        },
        {
            img: murderer
        }
    ];
    return (
        <>
            <div className='playground-heading'>Who made this crime?</div>
            <div className="round1">
                <img src={victim} className='victim' />
                <div className="image-card">
                    {itemData.map((item) => {
                        return (
                            (item.img == murderer) ?
                                <Link to='/round2/Q1'>
                                    <div className="image-item" onClick={() => setPoints(p => p + 1)}>
                                        <img src={item.img} />
                                    </div>
                                </Link>
                                :
                                <Link to='/round2/Q1'>
                                    <div className="image-item">
                                        <img src={item.img} />
                                    </div>
                                </Link>
                        )
                    })}
                </div>
            </div >
            <div className="footer"></div>
        </>
    )
}

export default Round1