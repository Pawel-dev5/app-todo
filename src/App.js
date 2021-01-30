import './App.css';
// import ModalBox from "./Components/Modal";
import FilmList from "./Components/FilmList";
import { useState } from "react";

function App() {
  const defaultShow = false
  const [show, setShow] = useState(defaultShow);
  const [sumData, setSumData] = useState([]);
  const [data, setData] = useState([]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function a() {
    // console.log("hello2");
    let tab = [...sumData, data];
    console.log(tab)
    return setSumData(tab);
  }
  function removeItem(id) {
    setSumData(prevData => {
        return prevData.filter((sumData, index) => {
            return index !== id;
        })
    });
}

  // const submit = e => {
  //   setSumData(prevData => {
  //     return [...prevData, data];
  //   });

  //   setData(data);
  // }

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
      {/* <ModalBox /> */}
      <FilmList
        sumData={sumData}
        data={data}
        a={a}
        // submit={submit}
        changeTitle={changeTitle}
        changeAutor={changeAutor}
        changeCat={changeCat}
        changePri={changePri}
        handleClose={handleClose}
        handleShow={handleShow}
        show={show}
        removeItem={removeItem}
      />
    </div>
  );
}

export default App;
