import React, { useState, useEffect } from "react";
//  Components
import Post from "./Post";
import Users from "./Users";
import Comments from "./Comments";
// Style
import "./style/ApiHolder.css";

function ApiHolder() {
  const [type, setType] = useState("posts");
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then((response) => response.json())
      .then((json) => {
        setIsLoading(false);
        console.log(json);
      })
      .catch((err) => {
        setIsLoading(false);
        setIsError(true);
        console.log(err);
      });
  }, [type]);
  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="ApiHolder-container">
      <button onClick={() => setType("posts")}>posts</button>
      <button onClick={() => setType("users")}>users</button>
      <button className="ApiHolder-button" onClick={() => setType("comments")}>
        Comments
      </button>
      {isError && <div>Error fetching data.</div>}
    </div>
  );
}
export default ApiHolder;
