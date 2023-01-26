import img from '../assets/arrow_back.png'
import '../styles/dropdown.css'
import React, { useState } from 'react'

function Dropdown(props) {
    const [isExpanded, setIsExpanded] = useState(false);
    const [height, setHeight] = useState(0);
    const [rotation, setRotation] = useState(0);
    const changeDirection = () => {
        setRotation(rotation === 0 ? 180 : 0)
    }

    const extend =  () => {
        setIsExpanded(!isExpanded);
        setHeight(isExpanded ? 0 : 2500);
      }

    return (
        <div className='all-dropdown'>
            <div className={`dropdown ${ props.largeur }`} onClick={()=>{ extend(); changeDirection() }} >
                <p className='dropdown--title'>{props.title}</p>
                <img src={img} alt="flèche" className='dropdown--arrow' style={{ transform: `rotate(${rotation}deg)`}}/>
            </div>
            <div className={`dropdown--rectangle ${props.largeur}`} style={{maxHeight: height}}>
                <div className='dropdown--infos'>
                    <p>{props.text}</p>
                </div>
            </div>
        </div>
    )
}

export default Dropdown;