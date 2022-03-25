import React from "react";
import { Link } from "react-router-dom";

import "./style/Cards.css";

function Card({ login, nodeID, avatarUrl }) {
  return (
    <section className="Cards-container">
      <img className="Cards-img" src={avatarUrl} alt=""></img>
      <h2 className="Cards-h2">
        <span>Login:</span> {login}
      </h2>
      <p className="Cards-p">
        <span>Node ID:</span> {nodeID}
      </p>
      <p>
        <Link to={`/profile/${login}`}>
          <button className="Cards-button">View details &raquo;</button>
        </Link>
      </p>
    </section>
  );
}

export default Card;
