import React from "react";
import Button from 'react-bootstrap/Button';

export default function ToDoItem(props) {
    const {
        d,
        id,
        onCheck,
    } = props;
    return (
        <>
            <tr>
                <td>{d.title}</td>
                <td>{d.name}</td>
                <td>{d.category}</td>
                <td>{d.priority}</td>
                <td><Button onClick={() => {onCheck(id)}} variant="primary" className="btn-del">Usuń</Button></td>
            </tr>
        </>
    )
};