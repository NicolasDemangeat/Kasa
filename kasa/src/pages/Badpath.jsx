import '../styles/badpath.css'
import { Link } from 'react-router-dom'


function Badpath() {
  return (
    <div className='badpath--contener'>
        <h1 className="badpath">404</h1>
        <p className='badpath--text'>Oups! La page que vous demandez n'existe pas.</p>
        <Link to="/" className='badpath--link' >Retourner sur la page d’accueil</Link>
    </div>
  );
}

export default Badpath;
