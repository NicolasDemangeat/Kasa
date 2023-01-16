import img from '../assets/arrow_back.png'
import '../styles/dropdown.css'
import React, { useState } from 'react'

function Dropdown(props) {
    const [height, setIsVisible] = useState(0)
    const [rotation, setRotation] = useState(0)

    const changeDirection = () => {
        setRotation(rotation === 0 ? 180 : 0)
    }

    const extend = () => {
        setIsVisible(height === 0 ? '220px' : 0)
    }

    return (
            <div className='all-dropdown'>
                <div className={`dropdown ${ props.largeur }`} onClick={()=>{ extend(); changeDirection() }} >
                    <p className='dropdown--title'>{props.title}</p>
                    <img src={img} alt="flèche" className='dropdown--arrow' style={{ transform: `rotate(${rotation}deg)`}}/>
                </div>
                <div className={`dropdown--rectangle ${props.largeur}`} style={{height: height, transition: 'height 0.5s ease-in-out'}}>
                    <div className='dropdown--infos'>
                        {props.largeur === 'large' ? <p>{props.text}</p> : null}
                    </div>
                </div>
            </div>
    )
}

export default Dropdown;