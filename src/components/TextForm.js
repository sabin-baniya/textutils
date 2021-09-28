import React, {useState} from 'react'

function TextForm(props) {

    const buttonUpClick = ()=>{
        let newText = text.toUpperCase();
        updateText(newText);
        if(text.length!=0){
            props.showAlert("Converted to Uppercase", 'success')
        }
    }

    const buttonLoClick = ()=>{
        let newText = text.toLowerCase();
        updateText(newText);
        if(text.length!=0){
            props.showAlert("Converted to Lowercase", 'success')
        }
    }

    const buttonCopy = () =>{
        let textArea = document.getElementById('myText');
        textArea.select();
        navigator.clipboard.writeText(textArea.value);
        if(text.length!=0){
            props.showAlert("Copied to clipboard", 'success')
        }
    }

    const buttonRemoveExtraSpaces = () =>{
        let newText = text.split(/[ ]+/);
        updateText(newText.join(" "));
        if(text.length!=0){
            props.showAlert("Extra spaces removed", 'success')
        }
    }

    const buttonClear = ()=>{
        let newText = "";
        updateText(newText);
        if(text.length!=0){
            props.showAlert("Text cleared", 'danger')
        }
        
    }

    const buttonCapsClick = ()=>{
        let firstChar = text.charAt(0);
        let newText = firstChar.toUpperCase();
        updateText(newText+text.slice(1))
        if(text.length!=0){
            props.showAlert("First letter capitalised", 'success')
        }
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
                <textarea className="form-control my-3" id="myText" rows="5" value={text} onChange={buttonOnChange} style={{backgroundColor: props.mode==='dark'?'#10181f':'white', color: props.mode==='dark'?'white':'black'}}></textarea>
                <button className="btn btn-primary mx-2 my-2" onClick={buttonUpClick}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-2 my-2" onClick={buttonLoClick}>Convert to Lowercase</button>
                <button className="btn btn-primary mx-2 my-2" onClick={buttonCapsClick}>First Letter Caps</button>
                <button className="btn btn-primary mx-2 my-2" onClick={buttonCopy}>Copy Text to Clipboard</button>
                <button className="btn btn-primary mx-2 my-2" onClick={buttonRemoveExtraSpaces}>Remove Extra Spaces</button>
                
                <button className="btn btn-danger mx-2 my-2" onClick={buttonClear}>Clear</button>

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
