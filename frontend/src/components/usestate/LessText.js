import React from "react";
import { useState } from "react";
import "./style/LessText.css";

function LessText(props) {
  const { text, maxLength } = props;
  const [hidden, setHidden] = useState(true);

  if (text.length <= maxLength) {
    return <span>{text}</span>;
  }

  return (
    <div className="">
      <span className="">
        {hidden ? `${text.substr(0, maxLength).trim()} ...` : text}
        {hidden ? (
          <buttnon onClick={() => setHidden(false)} className="">
            read more
          </buttnon>
        ) : (
          <button onClick={() => setHidden(true)} className="">
            read less
          </button>
        )}
      </span>
    </div>
  );
}

export default LessText;
