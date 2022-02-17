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
    const handleClearClick = () => {
        let newText = '';
        setText(newText);
    }
    const handleCopyClick = () => {
        let newText = document.getElementById("TextArea");
        newText.select();
        navigator.clipboard.writeText(newText.value);
    }
    const handleOnChange = (event) => {
        setText(event.target.value);
    }
    const [text, setText] = useState('');
    return (
        <>
            <div className='container'>
                <div className="mb-3">
                    <h1>{props.heading}</h1>
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="TextArea" rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-2" onClick={handleUpperCaseClick}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-2" onClick={handleLowerCaseClick}>Convert to Lowercase</button>
                <button className="btn btn-success mx-2" onClick={handleClearClick}>Clear</button>
                <button className="btn btn-success mx-2" onClick={handleCopyClick}>Copy Text</button>
            </div>
            <div className="container my-3">
                <h2>Your text summary</h2>
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
