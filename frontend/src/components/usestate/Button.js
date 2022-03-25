import React, { useState } from "react";
import "./style/Button.css";

function Button() {
  const [text, setText] = useState(false);
  const [color, SetColor] = useState(false);
  const [buttonName, setButtonName] = useState(false);
  function change() {
    SetColor(!color);
    setText(!text);
    setButtonName(!buttonName);
  }
  return (
    <section className="Button-container">
      <div className="Button-container-body">
        <style>{`
        .red {background-color: red}
        .green {background-color: green}
      `}</style>
        <h4>{!color ? "Lorem ipsum dolor sit!" : "Lorem ipsum!"}</h4>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
        <button
          className={!text ? "red" : "green"}
          type="button"
          onClick={change}
        >
          {!buttonName ? "Mark as done" : "Done"}
        </button>
      </div>
    </section>
  );
}

export default Button;
