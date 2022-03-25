import React from "react";
import { Route, Routes } from "react-router-dom";

// Components
import GetApi from "./ApiData/GetApi";
import Profile from "./ApiData/Profile";
// Style
import "../components/ApiData/style/Api.css";

function userApi() {
  return (
    <Routes>
      <Route path="/" element={<GetApi />} />
      <Route path="/profile/:login" element={<Profile />} />
    </Routes>
  );
}

export default userApi;
