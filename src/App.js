import './App.css';
import FilmList from "./Components/FilmList";
import { useState } from "react";
import * as _ from "lodash";

function App() {
  const defaultShow = false
  const [show, setShow] = useState(defaultShow);
  const [sumData, setSumData] = useState([]);
  const [data, setData] = useState([]);
  const [sort, setSort] = useState("")

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function sorted() {
    const sorted = _.sortBy(sumData, sort)
    return setSumData(sorted)
  }

  const setSortValue = (e) => {
    setSort(e.target.value);
  };
  function a() {
    let tab = [...sumData, data];
    console.log(tab)
    setShow(defaultShow);
    return setSumData(tab);
  }

  function filter(value) {
    const c = "Kryminał"
    setSumData(prevData => {
      return prevData.filter((item) => value === item.category)
    })
  }
  function removeItem(id) {
    setSumData(prevData => {
      return prevData.filter((d, index) => {
        return index !== id;
      })
    });
  }

  function clearAll() {
    return setSumData([])
  }
  const changeTitle = e => {
    const { value } = e.target;
    setData(prevState => ({
      ...prevState,
      title: value.trim()
    }))
  };
  const changeAutor = e => {
    const { value } = e.target;
    setData(prevState => ({
      ...prevState,
      name: value
    }))
  }
  const changeCat = e => {
    const { value } = e.target;
    setData(prevState => ({
      ...prevState,
      category: value
    }))
  }
  const changePri = e => {
    const { value } = e.target;
    setData(prevState => ({
      ...prevState,
      priority: value
    }))
  }
  return (
    <div className="App">
      <FilmList
        sort={sort}
        sorted={sorted}
        setSortValue={setSortValue}
        sumData={sumData}
        data={data}
        a={a}
        changeTitle={changeTitle}
        changeAutor={changeAutor}
        changeCat={changeCat}
        changePri={changePri}
        handleClose={handleClose}
        handleShow={handleShow}
        show={show}
        removeItem={removeItem}
        clearAll={clearAll}
      />
    </div>
  );
}
export default App;
