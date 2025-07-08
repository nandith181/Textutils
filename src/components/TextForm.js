import React, {useState} from 'react'

export default function TextForm(props) {

    const handleUpClick = ()=> {
        let newText = text.toUpperCase(); 
        setText(newText)
        props.showAlert("Converted to Upper Case!", "success");
    } 

    const handleLoClick = ()=> {
        let newText = text.toLowerCase(); 
        setText(newText)
        props.showAlert("Converted to Lower Case!", "success");
    } 

    const handleExtraSpace = ()=> {
        let newText = text.split(/[ ]+/); 
        setText(newText.join(" "))
        props.showAlert("Extra Spaces removed!", "success");
    } 

    const handleClearClick = ()=> {
        let newText = (''); 
        setText(newText)
        props.showAlert("Text Cleared!", "success");
    } 

    const handleCopyClick = ()=> {        
        if (navigator.clipboard) {
            navigator.clipboard.writeText(text)
            .then(() => {
            console.log("Text copied to clipboard!");
            // Optional: Show a success message (e.g., using state)
            })
            .catch((err) => {
            console.error("Failed to copy:", err);
            });
        }    
        props.showAlert("Text Copied!", "success");

    }
 

    const handleOnChange = (event)=> {
        console.log("onChange");
        setText(event.target.value)
    }
     

    const [text, setText] = useState("");
  return (
    <>
      <div className='container' style={{color: props.mode === 'dark' ? 'white' : 'black'}}>
    <h1>{props.heading}</h1>
    <div className="mb-3">
        <textarea 
            className="form-control" 
            value={text} 
            onChange={handleOnChange} 
            style={{
                backgroundColor: props.mode === 'dark' ? '#1e1e2f' : 'white',
                color: props.mode === 'dark' ? 'white' : 'black'
            }}
            id="myBox" 
            rows="8"
        ></textarea>
    </div>
    <button className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert to UpperCase</button>
    <button className="btn btn-primary mx-2 my-2" onClick={handleLoClick}>Convert to LowerCase</button>
    <button className="btn btn-primary mx-2 my-2" onClick={handleCopyClick}>Copy Text</button>
    <button className="btn btn-primary mx-2 my-2" onClick={handleClearClick}>Clear</button>
    <button className="btn btn-primary mx-2 my-2" onClick={handleExtraSpace}>Remove Extra Space</button>
</div>
<div className="container my-3" style={{color: props.mode === 'dark' ? 'white' : 'black'}}>
    <h1>Text Summary</h1>
    <p>{text.split(" ").filter(word => word !== '').length} Words and {text.length} Characters</p>
    <p>{0.006 * text.split(" ").filter(word => word !== '').length} Minutes to Read</p>
    <h2>Preview</h2>
    <p>{text.length > 0 ? text : 'Enter something in the textbox above to preview it here'}</p>   
</div>
    </>
  )
}
