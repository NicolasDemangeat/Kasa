import { Link, NavLink } from 'react-router-dom'
import img from '../assets/logored.png'
import '../styles/header.css'

function Header() {
    return (
        <header>
            <div className='logo_kasa'>
            <Link to="/"><img src={ img } alt="Logo du site Kasa" /></Link>
            </div>
            <div className='menu'>
                <NavLink to="/" activeclassname="active"  className='menu--item' >Accueil</NavLink>
                <NavLink to="/apropos" activeclassname="active" className='menu--item'>A Propos</NavLink>
            </div>
        </header>

    )
}

export default Header;