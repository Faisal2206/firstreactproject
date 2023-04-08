import React, {useState} from "react";

export default function TextForm(props) {
    const Upper = () => {
        console.log('upper click was performed');
        let newText= text.toUpperCase();
        setText(newText);
    }
    const Count = () => {
        console.log('Count was performed');
        let newText2= text.length;
        setText("The count of text is " + newText2);
    }
    const back = () => {
        console.log('back was performed');
        let newText3= text.toLowerCase();
        setText(newText3);
    }
    const Change = (event) => {
        console.log('upper click was performed');
        setText(event.target.value);
    }
    
    // const [text, setText] = useState() 
    const [text, setText] = useState('')
  return (
    <>
    <div className="container my-3">
    <div className="text-box">
         <h1 className="text-center">{props.heading}</h1>
      <div className="container     mb-3">
        <textarea className="form-control my-5" onChange={Change}  value={text} id="mybox" rows="8"></textarea>
      </div>
      <button className="btn btn-primary" onClick={Upper}>conver to upper case</button>
      <button className="btn btn-primary px-5 mx-5" onClick={Count}>Get count</button>
      <button className="btn btn-primary px-5 mr-5" onClick={back}>back to official text</button>
    </div>
    <div className="container summary-data">
        <h1 >Your Text Summary</h1>
        <p>{text.split(" ").length} Words and {text.length} Characters</p>
    </div>
     </div>
    
    </>
  );
}
