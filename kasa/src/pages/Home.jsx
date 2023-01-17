import BannerHome from '../components/Home_banner'
import React, { Link } from 'react';
import '../styles/home.css'
import Thumb from '../components/Thumb'
import home_banner from "../assets/bk_home.jpg"
import {datas} from '../datas/datas'

function Home() {
  return (
    <React.StrictMode>
        <BannerHome src={home_banner} title={true}/>
        <div className='section--thumb'>
            <div className='contener--thumb'>
                <Thumb imgUrl={datas[0].cover} title={datas[0].title}/>
                <Thumb />
                <Thumb />
                <Thumb />
                <Thumb />
            </div>
        </div>
    </React.StrictMode>        
  );
}

export default Home;
