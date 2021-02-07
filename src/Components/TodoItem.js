import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';
import ModalBox from "./Modal";
import Modal from 'react-bootstrap/Modal';
import AddForm from "./AddForm";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function ToDoItem(props) {
    const {
        d,
        id,
        onCheck,
        // setData,
        // show,
        // handleShow,
        // handleClose,
        // add,
        // data,
        // clearAll,
        // sumData,
        // changeTitle,
        // changeAutor,
        // changeCat,
        // changePri
    } = props;
    const defaultShow = false;
    const [show, setShow] = useState(defaultShow);
    const [editData, setEditData] = useState(d);
    const [editedData, setEditedData] = useState({});
    // console.log(d)
    function showw() {
        console.log(editData)
        handleShow()
        return setEditData(d)

    }
    console.log(editedData)

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    function add() {
        // let tab = [...sumData, data];
        setShow(defaultShow);
        return setEditedData(editData);
    }

    // Handle modal form values
    const changeTitle = e => {
        const { value } = e.target;
        setEditData(prevState => ({
            ...prevState,
            title: value.trim()
        }))
    };
    const changeAutor = e => {
        const { value } = e.target;
        setEditData(prevState => ({
            ...prevState,
            name: value
        }))
    }
    const changeCat = e => {
        const { value } = e.target;
        setEditData(prevState => ({
            ...prevState,
            category: value
        }))
    }
    const changePri = e => {
        const { value } = e.target;
        setEditData(prevState => ({
            ...prevState,
            priority: value
        }))
    }

    return (
        <>
            <Modal show={show} onHide={handleClose} data={d}>
                <Modal.Header closeButton>
                    <Modal.Title>Dodaj film</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Control type="text" placeholder={d.title} onChange={changeTitle} />
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Control type="text" placeholder={d.name} onChange={changeAutor} />
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlSelect1">
                            <Form.Label>Kategoria</Form.Label>
                            <Form.Control as="select" value={d.category} onChange={changeCat}>
                                <option> </option>
                                <option>Kryminał</option>
                                <option>Science-fiction</option>
                                <option>Fantasy</option>
                                <option>Poezja</option>
                                <option>Dramat</option>
                                <option>Nauki ścisłe</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlSelect1">
                            <Form.Label>Priorytet</Form.Label>
                            <Form.Control as="select" value={d.priority} onChange={changePri}>
                                <option> </option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </Form.Control>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Zamknij
                    </Button>
                    <Button variant="primary" onClick={add} >
                        Zapisz
                    </Button>
                </Modal.Footer>
            </Modal>
            {/* {editedData ? (
                <>
                    <tr>
                        <td>{editedData.title}</td>
                        <td>{editedData.name}</td>
                        <td>{editedData.category}</td>
                        <td>{editedData.priority}</td>
                        <td>
                            <FontAwesomeIcon className="icon-edit" onClick={showw} icon={faEdit} />
                            <FontAwesomeIcon className="icon-delete" onClick={() => { onCheck(id) }} icon={faTrash} />
                        </td>
                    </tr>
                </>
            ) : (
                    <>
                        <tr>
                            <td>{d.title}</td>
                            <td>{d.name}</td>
                            <td>{d.category}</td>
                            <td>{d.priority}</td>
                            <td>
                                <FontAwesomeIcon className="icon-edit" onClick={showw} icon={faEdit} />
                                <FontAwesomeIcon className="icon-delete" onClick={() => { onCheck(id) }} icon={faTrash} />
                            </td>
                        </tr>
                    </>
                )} */}
                     <tr>
                            <td>{d.title}</td>
                            <td>{d.name}</td>
                            <td>{d.category}</td>
                            <td>{d.priority}</td>
                            <td>
                                <FontAwesomeIcon className="icon-edit" onClick={showw} icon={faEdit} />
                                <FontAwesomeIcon className="icon-delete" onClick={() => { onCheck(id) }} icon={faTrash} />
                            </td>
                        </tr>
        </>
    )
};