import React from 'react';
import banner from '../assets/bk_home.jpg'

function BannerHome() {
    return (
        <div className='home-banner-contener'>
            <img src={banner} alt="banière de la page home" />
        </div>
    )
}

export default BannerHome;