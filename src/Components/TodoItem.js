import React from "react";

const ToDoItem = (d, onCheck, id) => {
    return (
        <>
            <tr
                onClick={() => { onCheck(id) }}
            >
                <td>{d.d.title}</td>
                <td>{d.d.name}</td>
                <td>{d.d.category}</td>
                <td>{d.d.priority}</td>
            </tr>
        </>
    )
};

export default ToDoItem;