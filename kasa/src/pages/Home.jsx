import BannerHome from '../components/Home_banner'
import React from 'react';
import '../styles/home.css'
import Thumb from '../components/Thumb'
import Tag from '../components/Tag'
import Dropdown from '../components/Dropdown';
import home_banner from "../assets/bk_home.jpg"


function Home() {
  return (
    <React.StrictMode>
        <BannerHome src={home_banner} title={true}/>
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

        <Dropdown largeur="large" text="nouvelle valeur"/>
    </React.StrictMode>        
  );
}

export default Home;
