import React, { useState } from 'react'

export default function Form(props) {
    const handleOnChange = (event) => {
        // console.log("state changed");
        setText(event.target.value);
    }

    const handleUpClick = () => {
        // console.log("button click and funtion runned");
        let newText = text.toUpperCase();
        props.showAlert("success","converted to upper case");
        setText(newText);
    }

    const handleLpClick = () => {
        // console.log("button click and funtion runned");
        let newText = text.toLowerCase();
        props.showAlert("success","converted to lower case");
        setText(newText);
    }

    const handleSpaceClick = ()=>{
        let newText = text.split(/[ ]+/);
        props.showAlert("success","removed extra spaces");
        setText(newText.join(" "));
    }

    const handleDeleteClick = ()=>{
        setText("");
        props.showAlert("success","text deleted");
    }
    const handleCopyClick = ()=>{
      navigator.clipboard.writeText(text);
      props.showAlert("primary","text copied to clipboard");
    }

    const [text, setText] = useState('Enter text here');
    // setText("newText");
    return (
        <>
            <div className="container mt-5" style={{ color: props.Mode === 'light' ? 'black' : 'white' }}>
                <h1>{props.heading}</h1>
                <div className="mt-3">
                    <textarea  className="form-control" onChange={handleOnChange} style={{ backgroundColor: props.Mode === 'light' ? 'white' : 'rgb(0 14 54)', color: props.Mode === 'light' ? 'black' : 'white' }} value={text} id="textArea" rows="10"></textarea>
                </div>
                <button type="button" onClick={handleUpClick} className="btn btn-primary my-2 mx-1">Convert To UpperCase</button>
                <button type="button" onClick={handleLpClick} className="btn btn-primary my-2 mx-1">Convert To LowerCase</button>
                <button type="button" onClick={handleSpaceClick} className="btn btn-primary my-2 mx-1">Remove Extra Spaces</button>
                <button type="button" onClick={handleDeleteClick} className="btn btn-primary my-2 mx-1">Remove The Text</button>
                <button type="button" onClick={handleCopyClick} className="btn btn-primary my-2 mx-1">Copy Text</button>
            </div>
            <div className="container my-3" style={{ color: props.Mode === 'light' ? 'black' : 'white' }}>
                <h1>Your Text Summery</h1>
                <p>{text.length} Characters and {text.split(/\s+/).filter((e)=>{return e.length!==0}).length} Words</p>
            </div>
        </>
    )
}

