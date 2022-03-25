import React from "react";
import "./style/Box.css";

function PostContent(props) {
  return (
    <section className="Box-container">
      <img className="Box-image" src={props.box} alt="" />
    </section>
  );
}

export default PostContent;
