import './App.css';
import FilmList from "./Components/FilmList";
import { useState } from "react";
const arr = {
  title: "film1",
  name: "artysta 1",
  category: "Poezja",
  priority: "1"
}

function App() {
  const defaultShow = false
  const [show, setShow] = useState(defaultShow);
  const [sumData, setSumData] = useState([]);
  const [data, setData] = useState([]);
  const [done, setDone] = useState("no-active");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function a() {
    let tab = [...sumData, data];
    console.log(tab)
    setShow(defaultShow);
    setSumData(tab); 
    setData([]);
    console.log(data)
    return
  }

  function addDone(id) {
    // let tab1 = [...done, data];
    // console.log(tab1)
    // setShow(defaultShow);
    // setSumData(tab1); 
    // setData([]);

    // setSumData(prevData => {
    //   return prevData.filter((data, index) => {
    //     return index !== id;
    //   })
    // });
    if (done === "no-active") {
      setDone("active")
    }else return setDone("no-active")
  }
  // console.log(done)

  function removeItem(id) {
    console.log(data)
    setSumData(prevData => {
      return prevData.filter((data, index) => {
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
        addDone={addDone}
        done={done}
      />
    </div>
  );
}
export default App;
