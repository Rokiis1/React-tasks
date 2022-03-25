import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// Libraries
import axios from "axios";
// Style
import "./style/Card.css";

function Profile() {
  const [profile, setProfile] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  let { login } = useParams();
  useEffect(() => {
    axios
      .get(`https://api.github.com/users/${login}`)
      .then((res) => {
        setProfile(res.data);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        setIsError(true);
        console.log(error);
      });
  }, [login]);
  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="Profile-container">
      <div className="Profile-body">
        <img className="Profile-image" src={profile.avatar_url} alt="" />
        <p className="Profile-name">
          <span>Name:</span> {profile.name}
        </p>
        <p className="Profile-login">
          <span>Login:</span> {profile.login}
        </p>
        <p className="Profile-followers">
          <span>Followers:</span> {profile.followers}
        </p>
        <p className="Profile-twitter">
          <span>Twitter:</span> {profile.twitter_username}
        </p>
      </div>
      {isError && <div>Error fetching data.</div>}
    </div>
  );
}

export default Profile;
