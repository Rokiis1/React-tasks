import React, { useState, useEffect } from "react";
import axios from "axios";
import Cards from "./Cards";

import "./style/Api.css"

function GetApi() {
  const [users, SetUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    axios
      .get("https://api.github.com/users")
      .then((res) => {
        SetUsers(res.data);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        setIsError(true);
        console.log(error);
      });
  }, []);
  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <section className="GitUsers-container">
      <div className="GitUsers-body">
        {users.map((data) => (
          <Cards
            key={data.id}
            id={data.id}
            login={data.login}
            nodeID={data.node_id}
            avatarUrl={data.avatar_url}
            url={data.url}
          />
        ))}
      </div>
      {isError && <div>Error fetching data.</div>}
    </section>
  );
}

export default GetApi;
