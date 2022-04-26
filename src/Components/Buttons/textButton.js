import './buttonStyle.css'

function TextButton (props) {
    return <>
        <button className='btn btn-text'>
            {props.text}
        </button>
    </>
}

export default TextButton