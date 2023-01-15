import React from 'react';

function BannerHome(props) {
    return (
        <div className='home-banner-contener'>
            <img src={props.src} alt="banière de la page home" />
        </div>
    )
}

export default BannerHome;