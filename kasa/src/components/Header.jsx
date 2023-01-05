import '../datas/logements';
import { Link } from 'react-router-dom'
import img from '../assets/logored.png'
import '../styles/header.css'

function Header() {
    return (
        <header>
            <div className='logo_kasa'>
                <img src={ img } alt="Logo du site Kasa" />
            </div>
            <div className='menu'>
                <Link to="/" className='menu--item' >Accueil</Link>
                <Link to="/apropos" className='menu--item'>A Propos</Link>
            </div>
        </header>

    )
}

export default Header;