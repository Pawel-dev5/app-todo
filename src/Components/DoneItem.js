import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faCheckCircle } from '@fortawesome/free-solid-svg-icons'

export default function DoneItem(props) {
    const {
        d,
        id,
        onCheck,
        addDone,
        done,
        sumData
    } = props;
    // console.log(sumData)
    return (
        <>
            <tr>
                <td>{d.title}</td>
                <td>{d.name}</td>
                <td>{d.category}</td>
                <td>{d.priority}</td>
                <td>
                    {/* <FontAwesomeIcon className="icon-check" onClick={() => { addDone(id) }} sumData={sumData} icon={faCheckCircle} />  */}
                    <FontAwesomeIcon className="icon-delete" onClick={() => { onCheck(id) }} icon={faTrash} />
                </td>
            </tr>
        </>
    )
};