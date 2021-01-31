import Table from 'react-bootstrap/Table';
import ModalBox from "./Modal";
import ToDoItem from './TodoItem';
import Button from 'react-bootstrap/Button';

export default function FilmList(props) {
    const {
        changeTitle,
        changeAutor,
        onclick,
        changeCat,
        changePri,
        sumData,
        a,
        clearAll,
        show,
        handleClose,
        handleShow,
        removeItem
    } = props;
    const count = sumData.length

    if (sumData.length !== 0) {

    } else return (
        <>
            <ModalBox show={show} handleShow={handleShow} handleClose={handleClose} a={a} clearAll={clearAll} sumData={sumData} changeTitle={changeTitle} changeAutor={changeAutor} onclick={onclick} changeCat={changeCat} changePri={changePri} />
            <h4>Brak filmów do obejrzenia, dodaj film do listy</h4>
        </>
    )
    return (
        <>
            <ModalBox show={show} handleShow={handleShow} handleClose={handleClose} a={a} clearAll={clearAll} sumData={sumData} changeTitle={changeTitle} changeAutor={changeAutor} onclick={onclick} changeCat={changeCat} changePri={changePri} />
            <div className="container-list">
                <div className="header-container">
                    <h6>Filmy do obejrzenia: {count}</h6>
                    <Button onClick={clearAll} variant="primary" className="btn-rmv">Wyczyść</Button>
                </div>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Tytuł</th>
                            <th>Autor</th>
                            <th>Kategoria</th>
                            <th>Priorytet</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {sumData.map((d, index) => (
                            <ToDoItem
                                key={index}
                                id={index}
                                d={d}
                                onCheck={removeItem}
                            />
                        ))}
                    </tbody>
                </Table>
            </div>
        </>
    )
}