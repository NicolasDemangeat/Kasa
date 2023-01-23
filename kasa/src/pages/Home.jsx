import BannerHome from '../components/Home_banner'
import React, { Link } from 'react';
import '../styles/home.css'
import Thumb from '../components/Thumb'
import home_banner from "../assets/bk_home.jpg"
import {datas} from '../datas/datas'

function Home() {
  return (
    <React.StrictMode>
        <BannerHome src_img={home_banner} title={true}/>
        <div className='section--thumb'>
            <div className='contener--thumb'>
                {datas.map((data) => (
                    <Thumb key={`${data.id}`} imgUrl={data.cover} title={data.title} id={data.id}/>
                ))}
            </div>
        </div>
    </React.StrictMode>        
  );
}

export default Home;
