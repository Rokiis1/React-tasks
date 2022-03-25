import React from "react";
import { Link } from "react-router-dom";

import "./style/Navigation.css";

function Navigation() {
  return (
    <nav className="Nav-container">
      <h1>School works</h1>
      <div className="Nav-body">
        <ul className="Nav-links">
          <li>
            <Link to="/props">Props</Link>
          </li>
          <li>
            <Link to="/usestate">useState</Link>
          </li>
          <li>
            <Link to="/useeffect">useEffect</Link>
          </li>
          <li>
            <Link to="/userapi">Api</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/signup">Signup</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;
