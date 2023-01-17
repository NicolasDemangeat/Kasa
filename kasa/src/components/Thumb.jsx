import React from 'react';
import '../styles/thumb.css'

function Thumb(props) {
    const imageUrl  = props.imgUrl;
    return (
        <div className='thumb' style={{backgroundImage: `linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.5) 100%), url(${imageUrl})`}}>
            <p className='thumb--title'>{props.title}</p>
        </div>
    )
}

export default Thumb;