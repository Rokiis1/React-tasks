import React from "react";
// Components
import Header from "./props/Header";
import PostImage from "./props/PostImage";
import Box from "./props/Box";
// Style
import "./props/style/Props.css";
// Data
import data from "../data/card.json";
import data1 from "../data/box.json";

function Props() {
  const card = data.map((card) => {
    return (
      <PostImage
        key={card.id}
        id={card.id}
        img={card.coverImg}
        about={card.about}
      />
    );
  });
  const box = data1.map((box) => {
    return <Box key={box.id} id={box.id} box={box.boxImg} />;
  });
  return (
    <div className="Props-container">
      <Header />
      <section className="PostImage-card">{card}</section>
      <section className="Box-image">{box}</section>
    </div>
  );
}

export default Props;
