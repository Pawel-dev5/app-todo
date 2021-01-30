import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
// import { useState } from "react";
import AddForm from "./AddForm";

function ModalBox(props) {
    const {
        // submit,
        changeTitle,
        changeAutor,
        changeCat,
        changePri,
        ToDoAction,
        data,
        sumData,
        a,
        show,
        handleClose,
        handleShow
    } = props;
    // const defaultShow = false
    // const [show, setShow] = useState(defaultShow);

    // const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="primary" className="btn-add" onClick={handleShow} >
                Dodaj film do listy
            </Button>
            <Modal show={show} onHide={handleClose} data={data}>
                <Modal.Header closeButton>
                    <Modal.Title>Dodaj film</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <AddForm a={a} data={data} sumData={sumData} handleClose={handleClose} ToDoAction={ToDoAction} changeTitle={changeTitle} changeAutor={changeAutor} changeCat={changeCat} changePri={changePri} />
                </Modal.Body>
                <Modal.Footer>
                    {/* <Button variant="secondary" onClick={handleClose}>
                        Zamknij
            </Button>
                    <Button variant="primary" type="submit" onClick={ToDoAction} >
                        Dodaj
            </Button> */}
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalBox;