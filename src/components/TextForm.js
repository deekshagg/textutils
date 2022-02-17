import React, {useState} from 'react'
import propTypes from 'prop-types'


export default function TextForm(props) {
    const handleUpperCaseClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleOnChange = (event)=>{
        setText(event.target.value);
    }
    const [text, setText] = useState('Enter text here');
    return (
        <div>
            <div className="mb-3">
                <h1>{props.heading}</h1>
                <textarea className="form-control" value = {text} onChange = {handleOnChange} id="TextArea" rows="8"></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleUpperCaseClick}>Convert to Uppercase</button>
        </div>
    )
}
TextForm.propTypes = {
    heading: propTypes.string
}
