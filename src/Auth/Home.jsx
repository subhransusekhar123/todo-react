import React,{useState} from 'react'
import Navbar from './Navbar'


const Home = () => {
    let [state,setState] = useState({
        name:'',
        password:'',
        authtoken:Math.round(Math.random()*5)
    })

    let changeHandler = (e) => {
        setState({
            ...state,[e.target.name]:e.target.value
        })
        console.log(state)


    }

    let submitHandler = (e) => {
        e.preventDefault();
        localStorage.setItem('data',JSON.stringify(state))
        setState({
            name:'',
            password:'',
            authtoken:Math.round(Math.random()*5)
        })
    }
  return (
      <>
      <Navbar/>

      <form action="" onSubmit={submitHandler}>
          <input type="text" name="name"   onChange={changeHandler} value={state.name}/>
          <input type="password" name="password"  onChange={changeHandler} value={state.password}/>
          <button>submit</button>
      </form>
      </>
  )
}

export default Home