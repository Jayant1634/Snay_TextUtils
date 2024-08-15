import React, {useState} from 'react'


export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("Uppercase was clicked");
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase!","success");
  }
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase!","success");
  }
  const handleDeClick = () => {
    let newText = '';
    setText(newText);
    props.showAlert("Cleared!","success");
  }
  const handleCopy = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied!","success");
  }
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces removed!","success");
  }

  const handleOnCHange = (event) => {
    setText(event.target.value);
  }
  const [text, setText] = useState('');

  return (
    <>
    <div className="container my-3" style={{color:props.mode==='light'?'black':'white'}}>
      <h3>{props.heading}</h3>
        <div className="mb-3">
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnCHange} placeholder='Enter the text'  style={{backgroundColor:props.mode==='light'?'white':'black', color:props.mode==='light'?'black':'white'}} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to UpperCase</button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to LowerCase</button>
        <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
        <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove ExtraSpaces</button>
        <button className="btn btn-primary mx-2" onClick={handleDeClick}>Clear All</button>
        </div>
    </div>
    <div className="container my-1" style={{color:props.mode==='light'?'black':'white'}}>
      <h4>Text Summary</h4>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").length} Minutes to read</p>
      <h4>Preview</h4>
      <p>{text.length>0?text:"Enter something in the TextBox to preview here...."}</p>
    </div>
    </>
  )
}
