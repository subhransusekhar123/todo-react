import React from 'react'
import { useLocation } from 'react-router-dom';
import Home from './Home';
const person= [
  {
    user:'teacher',
    path:['/features','/contact','/new1']

  },
  
  {
    user:'student',
    path:['/contact']

  }
]
const HOC = ({children}) => {
  let location = useLocation()
    let getData = JSON.parse(localStorage.getItem('data'));
    console.log(getData)
    let whoIsUser =  person.find((ele)=> {
      return ele.user === 'teacher'
    })
    console.log(whoIsUser)
    let isThere = whoIsUser.path.includes(location.pathname)
    console.log(location)
    console.log(isThere)
  return (
    <div>
        {
          
          isThere && getData?.authtoken ? children : <Home/> //location and token 
        }
    </div>
  )
}

export default HOC;