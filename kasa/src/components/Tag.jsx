import '../styles/tag.css'
function Tag(props) {
    return (
        <div className='tag'>
            <p className='tag--name'>{props.text}</p>
        </div>
    )
}

export default Tag;