import { useState } from "react";
import "./App.css";

function App() {
  const [text, setText] = useState("");
  const [error, setError] = useState("");
  const [textFormatted, setTextFormatted] = useState("");
  const [copyText, setCopyText] = useState("Copy this text");
  const date = new Date();
  const handleTextSubmit = (e) => {
    e.preventDefault();
    if (text.trim() === "") {
      setError("Field can not be empty !");
      setTextFormatted("");
    } else {
      let formatText = text.split(" ").join("");
      setTextFormatted(formatText);
      setError("");
      setText("");
    }
  };

  const handleClickCopyText = () => {
    navigator.clipboard.writeText(textFormatted);
    setCopyText("Copied !");
  };
  return (
    <div>
      <div className='form-container'>
        <form onSubmit={handleTextSubmit} className='app-content'>
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder='Please, enter your text here'
          ></textarea>
          <small className='text-validation'>{error}</small>
          <button type='submit'>Format text</button>
        </form>
        <div className='text-format-content'>
          <p className='text-formatted'>{textFormatted}</p>
          {textFormatted !== "" && (
            <button onClick={handleClickCopyText}>{copyText}</button>
          )}
        </div>
      </div>
      <footer>
        <hr />
        <p className='footer-paragraph'>
          Copyright © {date.getFullYear()} Text Without Space | Powered by{" "}
          <a
            href='https://www.cardorelngassaki.com/'
            rel='noreferrer'
            target='_blank'
          >
            Junes Cardorel
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;
