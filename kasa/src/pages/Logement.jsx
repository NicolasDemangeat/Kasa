import { useParams   } from 'react-router-dom'
import {datas} from '../datas/datas'
import Tag from '../components/Tag'
import Carousel from '../components/Carousel'
import '../styles/logement.css'

function Logement() {
    let { id } = useParams();
    const item = datas.filter(data => data.id === id)
    const img = item[0].host.picture

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
                    <div className='starts-contener2'>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Logement;