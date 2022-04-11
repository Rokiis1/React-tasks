// libraries
import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
// Components
import Navigation from "./components/MainPage/Navigation";
import Props from "../src/components/Props.js";
import Usestate from "../src/components/Usestate.js";
import Profile from "./components/ApiData/Profile";
import GetApi from "./components/ApiData/GetApi";
// Style
import "./App.css";

function App() {
  return (
    <div className="App-container">
      <BrowserRouter>
        <nav className="Nav-container">
          <Navigation />
        </nav>
        <Routes>
          <Route path="/props" element={<Props />} />
          <Route path="/usestate" element={<Usestate />} />
          <Route path="/userapi" element={<GetApi />} />
          <Route path="/profile/:login" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
