import React from 'react';
import BannerHome from '../components/Home_banner';
import apropos_banner from '../assets/img_a_proros.jpg';
import Dropdown from '../components/Dropdown';
import '../styles/apropos.css'
function Apropos() {
    return (
        <React.StrictMode>
            <BannerHome src_img={apropos_banner} title={false}/>
            <div className='dropdown--contener--apropos'>
                <Dropdown largeur="large" title="Fiabilité" text="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes."/>
                <Dropdown largeur="large" title="Respect" text="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme." />
                <Dropdown largeur="large" title="Service" text="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question." />
                <Dropdown largeur="large" title="Sécurité" text="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes." />
            </div>
    </React.StrictMode>
    )
}

export default Apropos;