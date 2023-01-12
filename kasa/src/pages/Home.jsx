import BannerHome from '../components/Home_banner'
import React from 'react';
import '../styles/home.css'
import Thumb from '../components/Thumb'
import Tag from '../components/Tag'
import Dropdown from '../components/Dropdown';

function Home() {
  return (
    <React.StrictMode>
        <BannerHome />
        <div className='section--thumb'>
            <div className='contener--thumb'>
                <Thumb />
                <Thumb />
                <Thumb />
                <Thumb />
                <Thumb />
                <Thumb />
            </div>

        </div>

        <Tag />

        <Dropdown largeur="large"/>
    </React.StrictMode>        
  );
}

export default Home;
