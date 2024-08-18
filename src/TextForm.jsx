import React from 'react'
import { useState } from 'react'

export default function TextForm() {
    const toUpper=()=>{
        let newText = text.toUpperCase();
        setText(newText);
        
    }
    const toLower=()=>{
        let newText = text.toLowerCase();
        setText(newText);
        
    }
    const clear=()=>{
        let newText = '';
        setText(newText);
        
    }
    const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
      }

    const removeExtraSpaces = () => {
        let cleanedText = text.trim().replace(/\s+/g, ' ');
        setText(cleanedText);
      }
      const copyTextToClipboard = () => {
        navigator.clipboard.writeText(text);
      };
      
    const handleOnChange = (event)=> {
        // console.log("onchange clicked");
        setText(event.target.value);
    }
const [text, setText] = useState('Enter Text Heare');
  return (
        <>
        <div className ='container'>
        <div className ="mb-6">
        <textarea className ="form-control" value={text} onChange= {handleOnChange} id="exampleFormControlTextarea1" rows="8"></textarea>
        </div>
        <button className ='btn btn-primary mx-1' onClick={toUpper}>ToUpperCase</button>
        <button className ='btn btn-primary mx-1' onClick={toLower}>ToLowerCase</button>
        <button className ='btn btn-primary mx-1' onClick={clear}>Clear</button>
        <button className ='btn btn-primary mx-1' onClick={copyTextToClipboard}>Copy</button>
        <button className ='btn btn-primary mx-1' onClick={speak}>speak</button>
        <button className ='btn btn-primary mx-1' onClick={removeExtraSpaces}>RemoveExtraSpace</button>
        <div className ='container'>
            <h2>SUMMARY OF YOUR TEXT</h2>
            <p>{text.split(" ").length} words and{text.length}characters</p>
            <p>{0.008 * text.split(" ").length} minutes takes to read</p>
            <h2>PREVIEW</h2>
            <p>{text}</p>
        </div>
        </div>
        </>
)
}
