import Table from 'react-bootstrap/Table';
import ModalBox from "./Modal";
import ToDoItem from './TodoItem';
import Button from 'react-bootstrap/Button';
import { useState } from "react";

export default function FilmList(props) {
    const {
        changeTitle,
        changeAutor,
        changeCat,
        changePri,
        sumData,
        a,
        clearAll,
        show,
        handleClose,
        handleShow,
        removeItem,
        addDone,
        done
    } = props;

    const all = "Kryminał";
    const [filters, setFilters] = useState(all);

    const filterCategory = () => { setFilters("Dramat") }
    // console.log(filters)

    const count = sumData.length

    if (sumData.length !== 0) {

    } else return (
        <>
            <ModalBox
                show={show}
                handleShow={handleShow}
                handleClose={handleClose} a={a}
                clearAll={clearAll} sumData={sumData}
                changeTitle={changeTitle}
                changeAutor={changeAutor}
                changeCat={changeCat}
                changePri={changePri}
            />
            <h4>Brak filmów do obejrzenia, dodaj film do listy</h4>
        </>
    )
    return (
        <>
            <ModalBox
                show={show}
                handleShow={handleShow}
                handleClose={handleClose}
                a={a} clearAll={clearAll}
                sumData={sumData}
                changeTitle={changeTitle}
                changeAutor={changeAutor}
                changeCat={changeCat}
                changePri={changePri}
            />
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
                            <th onClick={filterCategory}>Kategoria</th>
                            <th>Priorytet</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* {sumData.map((d, index) => (
                            <ToDoItem
                                key={index}
                                id={index}
                                d={d}
                                onCheck={removeItem}
                            />
                        ))} */}

                        {/* To działa */}
                        {sumData.map((d, index) => {
                            // console.log(d.category)
                            return (
                                <ToDoItem
                                    key={index}
                                    id={index}
                                    d={d}
                                    onCheck={removeItem}
                                    addDone={addDone}
                                    done={done}
                                />
                            )
                        })}

                        {/* {sumData.map((d, index) => {
                            // const cat = d.category
                            console.log(d.category)
                            return (
                                <>
                                    {d.category.filter(i => i.includes(filter)) (
                                        <ToDoItem
                                        key={index}
                                        id={index}
                                        d={d}
                                        onCheck={removeItem}
                                    />
                                ) }
                                </>
                            )
                        })} */}
                    </tbody>
                </Table>
            </div>
        </>
    )
}