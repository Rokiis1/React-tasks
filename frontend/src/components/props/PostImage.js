import React from "react";
import "./style/PostImage.css";

function PostImage(props) {
  return (
    <section className="PostImage-container">
      <img className="PostImage-image" src={props.img} alt="" />
      <p className="PostContent-text">{props.about}</p>
    </section>
  );
}

export default PostImage;
