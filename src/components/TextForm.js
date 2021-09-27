import React, {useState} from 'react'

function TextForm(props) {

    const buttonUpClick = ()=>{
        let newText = text.toUpperCase();
        updateText(newText);
    }

    const buttonOnChange = (event)=>{
        updateText(event.target.value);
    }

    const [text, updateText] = useState()
    return (
        <div>
            <div className="mb-3 my-3">
                <h3>{props.heading}</h3>
                <textarea className="form-control my-3" id="myText" rows="3" value={text} onChange={buttonOnChange}></textarea>
                <button className="btn btn-primary" onClick={buttonUpClick}>Convert to Uppercase</button>
            </div>
        </div>
    )
}

export default TextForm;
