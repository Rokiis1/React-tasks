import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";

import Navigation from "./components/MainPage/Navigation";
import Props from "../src/components/Props.js";
import Usestate from "../src/components/Usestate.js";
import Useeffect from "../src/components/Useeffect.js";
import Register from "../src/components/Application/Register";
import Login from "../src/components/Application/Login";

import "./App.css";
import Profile from "./components/ApiData/Profile";
import GetApi from "./components/ApiData/GetApi";

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
          <Route path="/useeffect" element={<Useeffect />} />
          <Route path="/userapi" element={<GetApi />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Register />} />
          <Route path="/profile/:login" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
