import img from '../assets/arrow_back.png'
import '../styles/dropdown.css'
import React, { useState } from 'react'

function Dropdown(props) {
    const [isVisible, setIsVisible] = useState(false)
    const [rotation, setRotation] = useState(0)

    const changeDirection = () => {
        setRotation(rotation + 180)
    }

    return (
            <div className='all-dropdown'>
                <div className={`dropdown ${ props.largeur }`} onClick={()=>{ setIsVisible(!isVisible); changeDirection() }} >
                    <p className='dropdown--title'>{props.title}</p>
                    <img src={img} alt="flèche" className='dropdown--arrow' style={{ transform: `rotate(${rotation}deg)`}}/>
                </div>
                {isVisible && <div className={`dropdown--rectangle ${props.largeur}`}>
                    <div className='dropdown--infos'>
                        {props.largeur === 'large' ? <p>{props.text}</p> : null}
                    </div>
                </div>}
            </div>
    )
}

export default Dropdown;