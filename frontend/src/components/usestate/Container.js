import React, { useState } from "react";
// Components
import Button from "./Button";
import Buttonldr from "./Buttonsldr";
// import LessText from "./LessText";
import Learning from "./Learning";
import TodoListCard from "./TodoListCard";

// Style
import "./style/Container.css";

// Data
import data from "../../data/learn.json";
import data1 from "../../data/todoList.json";

function Container() {
  // Learning function
  const [status, setStatus] = useState(data);
  function changeStatus(id) {
    const updateStatus = [...status];
    updateStatus.forEach((item) => {
      if (item.id === id) {
        item.status = true;
      }
    });
    setStatus(updateStatus);
  }

  // Todo function
  const [click, setClick] = useState(data1);
  function changeClick(id) {
    const updateClick = [...click];
    updateClick.forEach((key) => {
      if (key.id === id) {
        key.click = true;
      }
    });
    setClick(updateClick);
  }

  // Todo delete button
  function handleDelete(id) {
    const counters = click.filter((c) => c.id !== id);
    setClick(counters);
  }

  const learn = status.map((item) => {
    // Learning data
    return (
      <Learning
        key={item.id}
        id={item.id}
        lang={item.language}
        img={item.img}
        status={item.status}
        changeStatus={changeStatus}
      />
    );
  });

  // Todo data
  const taskData = click.map((item) => {
    return (
      <TodoListCard
        key={item.id}
        id={item.id}
        task={item.task}
        click={item.click}
        changeClick={changeClick}
        onDelete={handleDelete}
      />
    );
  });

  return (
    <main className="Container">
      <Button />
      <Buttonldr />
      {/* <LessText /> */}
      <section className="Learning">{learn}</section>
      <section className="Todo">{taskData}</section>
    </main>
  );
}

export default Container;
