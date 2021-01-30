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
    return (
        <>
            <ModalBox show={show} handleShow={handleShow} handleClose={handleClose} a={a} clearAll={clearAll} sumData={sumData} changeTitle={changeTitle} changeAutor={changeAutor} onclick={onclick} changeCat={changeCat} changePri={changePri} />
            <div className="container-list">
                <h4>Zadania: {count}</h4>
                <Button onClick={clearAll} variant="primary" className="btn-rmv">Wyczyść</Button>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Tytuł</th>
                            <th>Autor</th>
                            <th>Kategoria</th>
                            <th>Priorytet</th>
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