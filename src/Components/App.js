import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import Form from "./Components/Form";
import { useState } from "react";
import Table from "./Components/Table";

function App() {
  const [state, setstate] = useState("");
  const [list, setList] = useState([]);
  const [keep,setKeep] = useState('');
  const [flag,setFlag] = useState(true)
  // change handler for input
  const changeHandler = (e) => {
    setstate(e.target.value);
    console.log(state);
  };

  const clickHandler = () => {
    console.log("hii");
    setList([...list, state]);
    console.log(list);
  };

  const deleteHandler = (num) => {
    console.log("hiii");
    list.splice(num, 1);
    setList([...list]);
  };

  const editHandler = (number) => {
    setstate(list[number])
    setKeep(number)
    setFlag(false)

  }

  const editinputHandler = () => {
    list.splice(keep, 1);
    setList([...list]);
    list.splice(keep,0,state)
    setList([...list]);
    console.log(list);
    setFlag(true)
  }
  return (
    <div className="App">
      <Navbar />
      <div>
        <span>Name</span>
        <input type="text" onChange={changeHandler} value={state}/>
        {
          flag?<button className="btn btn-success mt-3" onClick={clickHandler} >submit</button>:
               <button className="btn btn-primary" onClick={editinputHandler}>edittheinput</button>
        }
        
      </div>
     
       
      <Table list={list} deleteHandler={deleteHandler} editHandler={editHandler} />
    </div>
  );
}

export default App;
