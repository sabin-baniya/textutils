import React, {useState} from 'react'

function TextForm(props) {

    const buttonUpClick = ()=>{
        let newText = text.toUpperCase();
        updateText(newText);
    }

    const buttonLoClick = ()=>{
        let newText = text.toLowerCase();
        updateText(newText);
    }

    const buttonCopy = () =>{
        let textArea = document.getElementById('myText');
        textArea.select();
        navigator.clipboard.writeText(textArea.value);
    }

    const buttonRemoveExtraSpaces = () =>{
        let newText = text.split(/[ ]+/);
        updateText(newText.join(" "));
       
    }

    const buttonClear = ()=>{
        let newText = "";
        updateText(newText);
    }

    const buttonCapsClick = ()=>{
        let firstChar = text.charAt(0);
        let newText = firstChar.toUpperCase();
        updateText(newText+text.slice(1))

    }

    const buttonOnChange = (event)=>{
        updateText(event.target.value);
    }

    const [text, updateText] = useState("")
    return (
        <>
        <div className="container">
            <div className="mb-3 my-3">
                <h3>{props.heading}</h3>
                <textarea className="form-control my-3" id="myText" rows="5" value={text} onChange={buttonOnChange}></textarea>
                <button className="btn btn-primary mx-2" onClick={buttonUpClick}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-2" onClick={buttonLoClick}>Convert to Lowercase</button>
                <button className="btn btn-primary mx-2" onClick={buttonCapsClick}>First Letter Caps</button>
                <button className="btn btn-primary mx-2" onClick={buttonCopy}>Copy Text to Clipboard</button>
                <button className="btn btn-primary mx-2" onClick={buttonRemoveExtraSpaces}>Remove Extra Spaces</button>
                
                <button className="btn btn-danger mx-2" onClick={buttonClear}>Clear</button>

            </div>
        </div>
        <div className="container">
            <h2>Your Text Summary</h2>
            <p>No. of characters = {text.length}</p>
            <p>No. of words = {(text.split(" ").length)-1}</p>
            <h4>Preview</h4>
            <p>{text}</p>
        </div>
        </>
    )
}

export default TextForm;
