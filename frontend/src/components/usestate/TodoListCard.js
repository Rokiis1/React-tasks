import React from "react";

// Style
import "./style/TodoListCard.css";
import { FiCheck } from "react-icons/fi";
import { FiChevronRight } from "react-icons/fi";

function TodoListCard(props) {
  let { id, task, click, changeClick, onDelete } = props;
  return (
    <div className="TodoListCard-container">
      <style>{`
        .yellow {background-color: yellow}
        .green {background-color: green}
      `}</style>
      <p className={click ? "green" : "yellow"}>
        {click ? <FiCheck /> : <FiChevronRight />}
        {task}
      </p>
      <button onClick={() => changeClick(id)} className="TodoListCard-button">
        {click ? "Done" : "Check"}
      </button>
      <button
        onClick={() => onDelete(id)}
        className="TodoListCard-button-delete"
      >
        Delete
      </button>
    </div>
  );
}

export default TodoListCard;
