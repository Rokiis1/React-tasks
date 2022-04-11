import React from "react";
import { Link } from "react-router-dom";

import "./style/Navigation.css";

function Navigation() {
  return (
    <nav className="Nav-container">
      <h1>React</h1>

      <ul className="Nav-links">
        <li>
          <Link to="/props">Props</Link>
        </li>
        <li>
          <Link to="/usestate">useState</Link>
        </li>
        <li>
          <Link to="/userapi">Api</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
