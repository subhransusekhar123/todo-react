
import "../App.css";
import Navbar from "./Navbar";
import Form from "./Form";
import { useState } from "react";
import Table from "./Table";

function AppCopy() {
  const [state, setstate] = useState("");
  const [list, setList] = useState([]);
  const [keep,setKeep] = useState('');
  const [flag,setFlag] = useState(true)
  // change handler for input
  const changeHandler = (e) => {
    setstate(e.target.value);
    console.log(state);
  };

  const isha = JSON.parse(localStorage.getItem('bandu'))
  const clickHandler = () => {
    console.log("hii");
    // const item = localStorage
    localStorage.setItem('bandu',JSON.stringify([...isha,state]));
    // setList([...list, state]);
    // localStorage.setItem('bandu',JSON.stringify(list));
    console.log(list);
  };

  const deleteHandler = (num) => {
    console.log("hiii");
    isha.splice(num, 1);
    localStorage.setItem("bandu",JSON.stringify([...isha]));
  };

  const editHandler = (number) => {
    setstate(isha[number])
    setKeep(number)
    setFlag(false)
  }

  const editinputHandler = () => {
    console.log('hiii')
    isha.splice(keep, 1);
    localStorage.setItem('bandu',JSON.stringify([...isha]));
    isha.splice(keep,0,state)
    localStorage.setItem('bandu',JSON.stringify([...isha]));
    console.log(isha);
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
     
      <Table list={isha} deleteHandler={deleteHandler} editHandler={editHandler} />
    </div>
  );
}

export default AppCopy;
