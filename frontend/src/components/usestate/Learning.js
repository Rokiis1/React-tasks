import React from "react";

import "./style/Learning.css";

function Learning(props) {
  let { id, lang, img, status, changeStatus } = props;
  return (
    <div className="Learning-container">
      <div className="Learning-card">
        <img className="Learning-image" src={img} alt="" />
        <div className="Learning-body">
          <p className="Learning-text">{lang}</p>
          <p>{status ? "learn" : "studying"}</p>
          <button className="Learning-button" onClick={() => changeStatus(id)}>
            OK
          </button>
        </div>
      </div>
    </div>
  );
}
export default Learning;
