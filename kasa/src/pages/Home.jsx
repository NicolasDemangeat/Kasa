import BannerHome from '../components/Home_banner'
import React from 'react';
import '../styles/home.css'
import Thumb from '../components/Thumb'
import Tag from '../components/Tag'

function Home() {
  return (
    <React.StrictMode>
        <Thumb />
        <Tag />
        <BannerHome />
    </React.StrictMode>        
  );
}

export default Home;
