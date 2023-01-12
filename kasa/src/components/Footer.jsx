import { Link } from 'react-router-dom'
import img from '../assets/logo.png'
import '../styles/footer.css'

function Footer() {
    return (
        <footer>
            <div className='white_logo'>
            <Link to="/"><img src={ img } alt="Logo blanc du site Kasa" /></Link>
            </div>
            <div className='copyright'>
                <p>© 2020 Kasa. All rights reserved</p>
            </div>
        </footer>

    )
}

export default Footer;