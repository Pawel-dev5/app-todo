import React from "react";

const TodoItem = ({ item, onDone }) => {
  return (
    <li>
      {item.title}
      {item.name}
      {item.category}
      {/* {!item.isDone && <button onClick={() => onDone(item)}>OK</button>} */}
    </li>
  );
};

export default TodoItem;
