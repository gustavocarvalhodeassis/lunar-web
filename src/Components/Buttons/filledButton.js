import './buttonStyle.css'

function FilledButton (props) {
    return <>
        <button className='btn btn-filled'>
            {props.text}
        </button>
    </>
}

export default FilledButton