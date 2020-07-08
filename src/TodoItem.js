import React from "react";

function TodoItem(props) {
  const completed = {
    color: "#cdcdcd",
    textDecoration: "line-through",
    fontStyle: "italic"
  };
  return (
    <div className="item">
      <input
        type="checkbox"
        checked={props.item.completed}
        onChange={() => props.handleChange(props.item.id)}
      />
      <p style={props.item.completed ? completed : null}>{props.item.text}</p>
    </div>
  );
}

export default TodoItem;
