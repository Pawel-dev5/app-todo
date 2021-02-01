import './App.css';
import FilmList from "./Components/FilmList";
import { useState } from "react";

// const arr = {
//   title: "film1",
//   name: "artysta 1",
//   category: "Poezja",
//   priority: "1"
// }
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
    let tab = sumData.concat(data);
    console.log(tab)
    setShow(defaultShow);
    setSumData(tab);
    // setData([]);
    // console.log(data)
    return
  }

  function addDone(id) {

    // let doneTab2 = [...sumDone, done]
    // setSumDone(done)

    setDone(prevData => {
      return sumData.filter((data, index) => {
        return index === id;
      })
    });
    function addDoneSum() {
      const doneTab = sumDone.concat(done)
      setSumDone(doneTab)
      console.log(doneTab)


      return
    }
    addDoneSum();
    // const doneTab = sumDone.concat(done)
    // setSumDone(doneTab)

    // console.log(doneTab)

    // setSumDone(done)
    // console.log(sumDone)
    // console.log(done)

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
    setSumDone(prevData => {
      return prevData.filter((data, index) => {
        console.log(index)
        console.log(id === index)
        return index !== id;
      })
    });
  }

  function removeItem(id) {
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
