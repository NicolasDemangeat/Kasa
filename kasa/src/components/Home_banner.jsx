import React from 'react';
import '../styles/banner.css'


function BannerHome(props) {
    return (
        <div className='home-banner-contener' style={{backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.3) 100%),url(${props.src_img})`}}>
            {props.title ? <h1>Chez vous, partout et ailleurs</h1> : null}
        </div>
    )
}

export default BannerHome;