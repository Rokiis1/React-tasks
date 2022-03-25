import React, { useState } from "react";

import "./style/Buttonsldr.css";

function Buttonldr() {
  const [like, setLike] = useState(0);
  const [dislike, setDislike] = useState(0);
  function countLike() {
    setLike(like + 1);
  }
  function countDislike() {
    setDislike(dislike + 1);
  }
  function reset() {
    setLike(0);
    setDislike(0);
  }
  return (
    <section className="Buttonsldr-container">
      <div className="Buttonsldr-body">
        <img
          src="https://via.placeholder.com/300/09f/fff.png"
          className="Buttonsldr-card-img"
          alt=""
        />
        <h5 className="Buttonsldr-title">Lorem ipsum dolor sit.</h5>
        <p className="Buttonsldr-text">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit
          eligendi voluptatem eaque!
        </p>
        <div className="Buttonsldr-button-container">
          <button className="Buttonsldr-green" onClick={countLike}>
            like {like}
          </button>
          <button className="Buttonsldr-red" onClick={countDislike}>
            dislike {dislike}
          </button>
          <button className="Buttonsldr-reset" onClick={reset}>
            reset
          </button>
        </div>
      </div>
    </section>
  );
}
export default Buttonldr;
