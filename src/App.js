
// import './App.css';

import React, { useState } from 'react'
import Todo from "./components/Todo"
import axios from 'axios';
import Add from"./components/Add"
import Register from"./components/Register"
import Login from "./components/Login"
import { Routes, Route, Link } from "react-router-dom";


export default function App() {
  const [tasks, setTasks] = useState([])

  const endpoint = process.env.REACT_APP_ENDPOINT

 
  const GetData = () => {
  axios.get(`${endpoint}/tasks`)
  .then(res => {
//  console.log(process.env)
    setTasks(res.data)
  })
  .catch(err => {

  })


}




  // useEffect(()=>{

  //   GetData()
  // },[])
  const postaNewTodo = (body) => {
    axios.post(`${endpoint}/tasks`,body)
    .then(res => {
      
     
      // setTasks(res.data)
      GetData();
      // change state using spread operator
    })
    .catch(err => {

    })
    }

    const deleteTodo = (id) => {
  axios.delete(`${endpoint}/tasks/${id}`,)
  .then(res => {
    

    GetData();
  })
  .catch(err => {

  })
}

const deleteAll = () => {
  axios.delete(`${endpoint}/Alltasks`,)
  .then(res => {
    
  
    GetData();
  })
  .catch(err => {

  })
}

const GetCertainTodos = ()=> {

axios.get(`${endpoint}/filter?isCompleted=true`)
.then(function (response) {
 
  setTasks(response.data)

})
.catch(function (error) {
 
})

}

const GetCertainTodos2 = ()=> {

  axios.get(`${endpoint}/filter?isCompleted=false`)
  .then(function (response) {

    setTasks(response.data)
  
  })
  .catch(function (error) {
  
  })
  
  }

const  checkAndUpdate = (id,newStatus)=>{

  axios.put(`${endpoint}/tasks/${id}/${newStatus}`,)
  .then(function (response) {
    

    GetData()
  })
  .catch(function (error) {
  
  
  })
}




  const mapOverTasks = tasks.map((taskObj, i) => (

    
    <Todo  key={i} task={taskObj} deleteOneTodo={deleteTodo} checkAndUpdate1={checkAndUpdate}  />
  ));


// i need to use this command to put line on checked tasks style={{textDecoration:"line-through black"}}

// i need to get the tasks 

//  i need to put a button that deletes tasks

// i need to put isComplete in the shape of input checkbox and to display a line on selected tasks



//    const map = tasks.map((taskobj,i)=>{
// return <p>{taskobj.title}</p>
//   }); 



const relodpage = () => {

  window.location.reload();
}
const [IsLoggedIn, setIsLoggedIn] = useState();

const [username, setusername] = useState("");

const [Registered, setRegistered] = useState();

const logout = () =>{

  setIsLoggedIn(false)

  setusername("")

}
  
  return(
    <div className='App '>

    
      
    <ul className="">
      <li className="it1">
      <Link className=' link' to="/home">Home</Link>
      </li>
      <li className="it2">
      <Link className='link' to="/register">Register</Link>
      </li>
      <li className="it3">
      <Link className='link' to="/login">Login</Link>
      </li>

      <li className='No'> Welcome {username}</li>
    </ul>
  

<br/>
<div className='Do'>

      <button  className='btn' onClick={logout}>logout</button>
   
    </div> 
<br/>
<h1 className='list1'>To-Do list</h1>
<br/>


      <Routes>
        <Route path="/home" element={<div className="home">

        <Add addfunction={postaNewTodo}/>
        <br/>
        <hr className=""/>

            <br/>
    <div className='wrapper'>
    <button className='box a'  onClick={GetData}>Get ALL</button> 
    
    <button className='box b' onClick={deleteAll}>Delete All</button>
  
    <button className='box c' onClick={GetCertainTodos}>Get Finished</button>
  
    <button className='box d' onClick={GetCertainTodos2}>Get Pending</button>
  
    <button className='box e' onClick={relodpage} > Reload Page </button>
    </div>
      {/* {map} */}
                  <br/>
            <br/>
      {mapOverTasks}
      <br/>
      </div>}/>
        <Route path="login" element={< Login setIsLoggedIn={setIsLoggedIn} setusername={setusername} />} />
        <Route path="register" element={< Register setRegistered={setRegistered}  />} />
      </Routes>

    </div>
  )
  
}



