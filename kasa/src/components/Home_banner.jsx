import React from 'react';
import '../styles/banner.css'

function BannerHome(props) {
    return (
        <div className='home-banner-contener'>
            <div className='banner-img-contener'>
                <img src={props.src} alt="banière de la page home" />
            </div>
            {props.title ? <h1>Chez vous, partout et ailleurs</h1> : null}
        </div>
    )
}

export default BannerHome;