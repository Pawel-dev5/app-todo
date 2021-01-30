import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import AddForm from "./AddForm";

function ModalBox(props) {
    const {
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
                    <Button variant="secondary" onClick={handleClose}>
                        Zamknij
                    </Button>
                    <Button variant="primary" onClick={a} >
                        Dodaj
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
export default ModalBox;