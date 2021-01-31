import React from "react";
import Button from 'react-bootstrap/Button';


const ToDoItem = (props) => {
    const {
        d, 
        id, 
        onCheck,
        removeItem
    } = props;
    const idd = d.id
    function hello() {
        return console.log("hello" + {idd})
    }
    return (
        <>
            <tr
                onClick={() => { onCheck(id) }}
            >
                <td>{d.title}</td>
                <td>{d.name}</td>
                <td>{d.category}</td>
                <td>{d.priority}</td>
                <td><Button key={id} onClick={removeItem} variant="primary" className="btn-del">Usuń</Button></td>
            </tr>
        </>
    )
};

export default ToDoItem;