import Table from 'react-bootstrap/Table';
import ModalBox from "./Modal";
import ToDoItem from './TodoItem';
import Button from 'react-bootstrap/Button';



export default function FilmList(props) {
    const {
        // submit,
        changeTitle,
        changeAutor,
        onclick,
        changeCat,
        changePri,
        data,
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
                        {/* <tr>
                            <td>{data.title}</td>
                            <td>{data.name}</td>
                            <td>{data.category}</td>
                            <td>{data.priority}</td>
                        </tr> */}
                        {/* {sumData.map((d, index) => {
                            return (
                                <>
                                    <ToDoItem
                                        key={index}
                                        id={index}
                                        d={d}
                                        onCheck={removeItem}
                                    />
                                </>
                            )
                        })} */}

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
                {/* <ul>
                    {sumData.map((d) => {
                        return <li>{d.title}</li>
                    })}
                </ul> */}


            </div>
        </>
    )
}