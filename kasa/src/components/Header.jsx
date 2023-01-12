import { Link } from 'react-router-dom'
import img from '../assets/logored.png'
import '../styles/header.css'

function Header() {
    return (
        <header>
            <div className='logo_kasa'>
            <Link to="/"><img src={ img } alt="Logo du site Kasa" /></Link>
            </div>
            <div className='menu'>
                <Link to="/" className='menu--item' >Accueil</Link>
                <Link to="/apropos" className='menu--item'>A Propos</Link>
            </div>
        </header>

    )
}

export default Header;