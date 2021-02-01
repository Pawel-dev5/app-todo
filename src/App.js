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
  const [done, setDone] = useState([]);
  const [sumDone, setSumDone] = useState([]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const clearAllDone = () => setSumDone([]);
  const clearAll = () => setSumData([]);

  function a() {
    let tab = [...sumData, data];
    // console.log(tab)
    setShow(defaultShow);
    setSumData(tab);
    // setData([]);
    // console.log(data)
    return
  }

  function addDone(id) {
    // const {
    //   id,
    //   sumData
    // } = props;
    // let tab1 = [...done, data];
    // console.log(tab1)
    // setShow(defaultShow);
    // setSumData(tab1); 
    // setData([]);

    // console.log(sumData)

    // console.log("done buton")

    // let tabDone = [...sumDone, done]
    // console.log(tabDone)

    // setDone(tabDone);
    let doneTab = sumDone.concat(done)
    setSumDone(doneTab)
    console.log(doneTab)

    setDone(sumData)
    setDone(prevData => {
      return sumData.filter((data, index) => {
        return index === id;
      })
    });

    console.log(sumDone)
    console.log(done)

    // let doneTab = [...sumDone, done]
    // let tabDone = {...sumDone, done}
    // console.log(tabDone)
    // const toObject = (sumData, key) => sumData.reduce((a, b) => ({ ...a, [b[key]]: b }), {});
    // console.log(toObject)


    setSumData(prevData => {
      return prevData.filter((data, index) => {
        return index !== id;
      })
    });
    // const a = sumData;
    // if (done === "no-active") {
    //   setDone("active")
    // }else return setDone("no-active")
  }
  // console.log(done)
  // console.log(sumData)

  function removeDoneItem(id) {
    console.log(sumData)
    console.log(id)
    setSumDone(prevData => {
      return prevData.filter((data, index) => {
        console.log(index)
        console.log(id === index)
        return index !== id;
      })
    });
  }

  function removeItem(id) {
    console.log(sumData)
    console.log(id)
    setSumData(prevData => {
      return prevData.filter((data, index) => {
        console.log(index)
        console.log(id === index)
        return index !== id;
      })
    });
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
        sumDone={sumDone}
        removeDoneItem={removeDoneItem}
        clearAllDone={clearAllDone}
      />
    </div>
  );
}
export default App;
