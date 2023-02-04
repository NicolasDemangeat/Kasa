import { useParams, Navigate } from 'react-router-dom'
import {datas} from '../datas/datas'
import Tag from '../components/Tag'
import Carousel from '../components/Carousel'
import Dropdown from '../components/Dropdown'
import '../styles/logement.css'
import fullStar from '../assets/fullStar.png'
import greyStar from '../assets/greyStar.png'


function Logement() {
    let { id } = useParams();
    const item = datas.filter(data => data.id === id)
    if (item.length === 0){
        return <Navigate to="/badpath" replace={true} />
    }
    const img = item[0].host.picture
    const fullStarsNumber = item[0].rating
    const greyStarsNumber = 5 - fullStarsNumber

    return (
        <div className='logement'>
            <Carousel pictures={item[0].pictures}/>
            <div className='logement-contener'>
                <div className='contener1'>
                    <div className='logement-title-contener'>
                        <h1 className='logement-title-contener--items'>{item[0].title}</h1>
                        <p className='logement-title-contener--items'>{item[0].location}</p>
                    </div>            
                    <div className='logement-tag-contener'>
                        {item[0].tags.map((data) => (
                        <Tag key={data} text={data} />
                        ))}
                    </div>
                </div>
                <div className='contener2'>
                    <div className='photo-contener2'>
                        <p>{item[0].host.name}</p>
                        <img src={img} alt="profil du vendeur" />
                    </div>
                    <div className='stars-contener2'>
                        {Array.from({ length: fullStarsNumber }, (_, i) => (
                            <img className='stars' key={i} src={fullStar} alt="étoiles de notation pleine" />
                        ))}
                        {Array.from({ length: greyStarsNumber }, (_, i) => (
                            <img className='stars' key={i} src={greyStar} alt="étoiles de notation vide" />
                        ))}
                    </div>
                </div>                
            </div>
            <div className='dropdown-contener'>
                <Dropdown largeur="little" pos="right-dropdown" title="Description" text={item[0].description} />
                <Dropdown largeur="little" pos="left-dropdown" title="Équipments" text={item[0].equipments.map(element => {
                    return (
                        <p key={element} className='dropdown-element-list'>{element}</p>
                        )
                })} />
            </div>
        </div>
    )
}

export default Logement;