import './App.css';
import FilmList from "./Components/FilmList";
import { useState } from "react";
import TodoItem2 from "./Components/TodoItem2";

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

  // function addDone(id) {

  //   // let doneTab2 = [...sumDone, done]
  //   // setSumDone(done)

  //   setDone(prevData => {
  //     return sumData.filter((data, index) => {
  //       return index === id;
  //     })
  //   });
  //   function addDoneSum() {
  //     const doneTab = sumDone.concat(sumDone)
  //     setSumDone(doneTab)
  //     console.log(sumDone)


  //     return
  //   }
  //   addDoneSum();
  //   // const doneTab = sumDone.concat(done)
  //   // setSumDone(doneTab)

  //   // console.log(doneTab)

  //   // setSumDone(done)
  //   // console.log(sumDone)
  //   // console.log(done)

  //   setSumData(prevData => {
  //     return prevData.filter((data, index) => {
  //       return index !== id;
  //     })
  //   });
  //   // const a = sumData;
  //   // if (done === "no-active") {
  //     //   setDone("active")
  //     // }else return setDone("no-active")
  //   }
  //   // console.log(done)
  //   // console.log(sumData)

  const addDone = (id) => {
    setSumDone(sumData)
    setSumDone((prevItems) => {
      const tab = [...prevItems];
      console.log(tab)
      // const i = tab[0].key
      console.log(id)
      const index = tab.findIndex((item) => item.id === item.id);
      tab[index].isDone = true;
      // console.log(index)
      return tab;
    });
  };
  const tasks = sumData.filter((item) => item.isDone === false);
  const doneTasks = sumDone.filter((item) => item.isDone === true);
  console.log(doneTasks)

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
      title: value.trim(),
      isDone: false
    }))
  };
  const changeAutor = e => {
    const { value } = e.target;
    setData(prevState => ({
      ...prevState,
      name: value,
      isDone: false
    }))
  }
  const changeCat = e => {
    const { value } = e.target;
    setData(prevState => ({
      ...prevState,
      category: value,
      isDone: false
    }))
  }
  const changePri = e => {
    const { value } = e.target;
    setData(prevState => ({
      ...prevState,
      priority: value,
      isDone: false
    }))
  }
  return (
    <div className="App">
      <FilmList
        sumData={tasks}
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
        // done={done}
        sumDone={sumDone}
        removeDoneItem={removeDoneItem}
        clearAllDone={clearAllDone}
        doneTasks={doneTasks}
      />
      {/* {!item.isDone && <button onClick={() => onDone(item)}>OK</button>} */}

      {/* <ul>
        {doneTasks.map((item) => {
          return <TodoItem2 item={item} key={item.id} />;
        })}
      </ul> */}
    </div>
  );
}
export default App;
