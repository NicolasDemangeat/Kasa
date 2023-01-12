import img from '../assets/arrow_back.png'
import '../styles/dropdown.css'

function Dropdown(props) {
    return (
        <div className='all-dropdown'>
            <div className={`dropdown ${ props.largeur }`}>
                <p className='dropdown--text'>test</p>
                <img src={img} alt="flèche" className='dropdown--arrow'/>
            </div>
            <div className={`dropdown--rectangle ${ props.largeur}`}>
                <div className='dropdown--infos'>
                    <ul>
                        <li>test</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Dropdown;