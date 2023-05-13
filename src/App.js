
// import './App.css';

import React, { useState } from 'react'
import Todo from "./components/Todo"
import axios from 'axios';
import Add from"./components/Add"
import Register from"./components/Register"
import Login from "./components/Login"
import { Routes, Route, Link } from "react-router-dom";
import { useDisclosure } from '@chakra-ui/react'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react'
import { Button} from '@chakra-ui/react'
import { Grid  } from '@chakra-ui/react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'


export default function App() {
  const [tasks, setTasks] = useState([])

  const endpoint = process.env.REACT_APP_ENDPOINT

  const { isOpen, onOpen, onClose } = useDisclosure()

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
<h1 /*className='list1'*/>To-Do list</h1>
<br/>


      <Routes>
        <Route path="/home" element={<div >

        <Add addfunction={postaNewTodo}/>
        <br/>
        <hr className=""/>

            <br/>
    <div >
   


    <Grid templateColumns='repeat(8, 2fr)' m={[5, 5]} gap={6}>

    <Button  w='50%' h='10' bg='blue.500'  onClick={GetData}>Get ALL</Button> 

   
      <Button  w='50%' h='10' bg='blue.500' onClick={onOpen}>Delete all</Button> 
  
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Confirmation window</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
          Are you sure you want to delete all of the to-dos ?
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
            <Button onClick={deleteAll} variant='ghost'> Proceed </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
  
    <Button  w='50%' h='10' bg='blue.500' onClick={GetCertainTodos}>Get Finished</Button>
  
    <Button  w='50%' h='10' bg='blue.500' onClick={GetCertainTodos2}>Get Pending</Button>
  
    <Button  w='50%' h='10' bg='blue.500' onClick={relodpage} > Reload Page </Button>

    </Grid>
   
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



