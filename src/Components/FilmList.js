import Table from 'react-bootstrap/Table';
import ModalBox from "./Modal";
import ToDoItem from './TodoItem';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
export default function FilmList(props) {
    const {
        changeTitle,
        changeAutor,
        changeCat,
        changePri,
        sumData,
        setData,
        add,
        clearAll,
        show,
        handleClose,
        handleShow,
        removeItem,
        setSortValue,
        sort,
        sorted,
        sumDataCopy,
        setSumData,
        filter,
        setFilterValue,
        filtr
    } = props;
    const count = sumData.length

    // if (sumData.length !== 0) {

    // } else return (
    //     <>
    //         <ModalBox
    //             show={show}
    //             handleShow={handleShow}
    //             handleClose={handleClose}
    //             add={add}
    //             clearAll={clearAll}
    //             sumData={sumData}
    //             changeTitle={changeTitle}
    //             changeAutor={changeAutor}
    //             changeCat={changeCat}
    //             changePri={changePri}
    //         />
    //         <h4>Brak filmów do obejrzenia, dodaj film do listy</h4>
    //     </>
    // )

    function ClearFilter() {
        if(sumDataCopy.length !== 0){
            setSumData(sumDataCopy)
        }
        return
    }
    return (
        <>
            <ModalBox
                show={show}
                handleShow={handleShow}
                handleClose={handleClose}
                add={add}
                clearAll={clearAll}
                sumData={sumData}
                changeTitle={changeTitle}
                changeAutor={changeAutor}
                changeCat={changeCat}
                changePri={changePri}
            />
            <div className="container-list">
                <div>

                    <div className="header-container">
                        <Button variant="primary" onClick={handleShow} >
                            Dodaj film
                        <FontAwesomeIcon className="add-icon" icon={faPlusCircle} />
                        </Button>
                        <div className="clear-container">
                            <h6>Filmy do obejrzenia: {count}</h6>
                            <div>
                                <Button onClick={clearAll} variant="primary" className="btn-rmv">Wyczyść listę</Button>
                                <Button onClick={ClearFilter}>Wyczyść filtr</Button>
                            </div>
                        </div>
                        <div className="filter-container">
                            {/* <p>Sortowanie:</p>
                        <select className="select" value={sort} onClick={sorted} onChange={setSortValue}>
                            <option value="title">Tytuł</option>
                            <option value="name">Autor</option>
                            <option value="category">Kategoria</option>
                            <option value="priority">Priorytet</option>
                        </select>
                        <p>Filtr kategorii:</p>
                        <select className="select" value={filtr} onClick={filter} onChange={setFilterValue}>
                            <option value="Kryminał">Kryminał</option>
                            <option value="Science-fiction">Science-fiction</option>
                            <option value="Fantasy">Fantasy</option>
                            <option value="Poezja">Poezja</option>
                            <option value="Dramat">Dramat</option>
                            <option value="Nauki ścisłe">Nauki ścisłe</option>
                        </select> */}
                            <Form>
                                <Form.Group controlId="exampleForm.SelectCustom">
                                    <Form.Label>Sortowanie:</Form.Label>
                                    <Form.Control as="select" custom value={sort} onClick={sorted} onChange={setSortValue}>
                                        <option value="title">Tytuł</option>
                                        <option value="name">Autor</option>
                                        <option value="category">Kategoria</option>
                                        <option value="priority">Priorytet</option>
                                    </Form.Control>
                                </Form.Group>
                            </Form>
                            <Form>
                                <Form.Group controlId="exampleForm.SelectCustom">
                                    <Form.Label>Filtr kategorii:</Form.Label>
                                    <Form.Control as="select" custom value={filtr} onClick={filter} onChange={setFilterValue}>
                                        <option value="Kryminał">Kryminał</option>
                                        <option value="Science-fiction">Science-fiction</option>
                                        <option value="Fantasy">Fantasy</option>
                                        <option value="Poezja">Poezja</option>
                                        <option value="Dramat">Dramat</option>
                                        <option value="Nauki ścisłe">Nauki ścisłe</option>
                                    </Form.Control>
                                </Form.Group>
                            </Form>
                        </div>
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
                            {sumData.map((d, index) => {
                                return (
                                    <ToDoItem
                                        key={index}
                                        id={index}
                                        d={d}
                                        onCheck={removeItem}
                                        setData={setData}
                                        handleShow={handleShow}
                                        handleClose={handleClose}
                                        show={show}
                                        add={add}
                                        data={d}
                                        clearAll={clearAll}
                                        sumData={sumData}
                                        changeTitle={changeTitle}
                                        changeAutor={changeAutor}
                                        changeCat={changeCat}
                                        changePri={changePri}
                                        setSumData={setSumData}
                                    />
                                )
                            })}
                        </tbody>
                    </Table>
                </div>
            </div>
        </>
    )
}