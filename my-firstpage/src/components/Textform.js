import React,{useState} from 'react'

export default function Textform(props) {
    const handleUpClick = ()=>{
       let newtxt = text.toUpperCase();
       setText(newtxt);
       props.showAlert("converted to uppercase","success");
    }
    const handleOnChange = (event)=>{
        setText(event.target.value);
    }
    const handleDoClick = ()=>{
        let newtxt = text.toLowerCase();
       setText(newtxt);
       props.showAlert("converted to lowercase","success");
    }

    const clear = () =>{
        setText("");
        props.showAlert("textarea is cleared","success");
    }
    const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
      }

      const reverseText=()=>{
        let newText= text.split("").reverse().join("");
        setText(newText)
    }
    const cons = () => {
        for (count1 = 0; count1 <= text.length; count1++) {
          if (text.charAt(count1).match(/[bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ]/)) {
            countCons++;
            setCount1(countCons);
          }
        }
    };


   let [count, setCount] = useState(0);
   let [count1, setCount1] = useState(0);
   let countChar = 0,countCons = 0;


const vowel = () => {
    for (count = 0; count <= text.length; count++) {
      if (text.charAt(count).match(/[aeiouAEIOU]/)) {
        countChar++;
        setCount (countChar);
      }
    }
   
  };

  const handleCopy = () =>{
    const text = document.getElementById("mybox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("copied to clipbord","success");
  };


const [text,setText] = useState("");
  return (
    <>
    <div className='container my-3'>
        <h1>{props.heading}</h1>
            <div className="form-group">
                <textarea className="form-control" value={text} id="mybox" onChange={handleOnChange} rows="7"></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpClick}>Covert to Uppercase</button>
            <button className="btn btn-primary mx-2" onClick={handleDoClick}>Covert to Lowerclass</button>
            <button className="btn btn-primary mx-2" onClick={clear}>Clear text</button>
            <button className="btn btn-primary mx-2" onClick={speak}>Speak</button>
            <button className="btn btn-primary mx-2" onClick={reverseText}>Reverse Text</button>
            <button className="btn btn-primary mx-2" onClick={cons}>Consonents</button>
            <button className="btn btn-primary mx-2" onClick={vowel}>vowels</button>
            <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy text</button>

    </div>
    <div className="container">
        <h1>Your text Summary</h1>
        <p>{text.split(" ").length} words,{text.length} chars</p>
        <p>It will take {0.008*text.split(" ").length} min to read the input</p>
        <h3>Preview</h3>
        <p>{text}</p>

        <h3>You have entered:</h3>
        <p>{count} No. of Vowels</p>
        <p>{count1} No. of Consonants</p>
    </div>

    </>
  )
}
