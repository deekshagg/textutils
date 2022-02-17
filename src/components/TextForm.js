import React, { useState } from 'react'
import propTypes from 'prop-types'


export default function TextForm(props) {
    const handleUpperCaseClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleLowerCaseClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleOnChange = (event) => {
        setText(event.target.value);
    }
    const [text, setText] = useState('Enter text here');
    return (
        <>
            <div className='container'>
                <div className="mb-3">
                    <h1>{props.heading}</h1>
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="TextArea" rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-3" onClick={handleUpperCaseClick}>Convert to Uppercase</button>
                <button className="btn btn-primary" onClick={handleLowerCaseClick}>Convert to Lowercase</button>
            </div>
            <div className="container my-3">
                <h1>Your text summary</h1>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} Minutes read</p>
                <h3>Preview</h3>
                <p>{text}</p>
            </div>
        </>
    )
}
TextForm.propTypes = {
    heading: propTypes.string
}
