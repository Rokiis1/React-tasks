import React from "react";

function Users({ data }) {
  return (
    <div>
      <ul>
        {data && data.map((item, index) => <li key={index}>{item.title}</li>)}
      </ul>
    </div>
  );
}

export default Users;
