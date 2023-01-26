import React from 'react';
import '../styles/thumb.css'
import { Link } from 'react-router-dom'

function Thumb(props) {
    const imageUrl  = props.imgUrl;
    return (
        <Link to={`/logement/${props.id}`}>
            <div className='thumb' style={{backgroundImage: 
                        `linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, 
                        rgba(0, 0, 0, 0.5) 110%), 
                        url(${imageUrl})`}}>
                <p className='thumb--title'>{props.title}</p>
            </div>
        </Link>
    )
}

export default Thumb;