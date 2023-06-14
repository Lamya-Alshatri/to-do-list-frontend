
// import './App.css';

import React, { useState } from 'react'
import Todo from "./components/Todo"
import axios from 'axios';
import Add from"./components/Add"
import Register from"./components/Register"
import Login from "./components/Login"
import { Routes, Route } from "react-router-dom";
import { Box, Flex, Heading, useDisclosure } from '@chakra-ui/react'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Grid
} from '@chakra-ui/react'
import { Button} from '@chakra-ui/react'

import { IoMdTrash } from "react-icons/io";

import Header from './components/Header';




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
    <Box bg='pallete.whiteBlue' alignItems='center'  >

    
      
<Header name={username} logout={logout} />
  

<br/>
{/* <div className='Do'>

      <button  className='btn' onClick={logout}>logout</button>
   
    </div>  */}
<br/>

      <Routes>
        <Route path="/home" element={<Box>
          <Flex  justifyContent='center'>
<Heading color='pallete.darkBlue' as='h1' m={10}  /*className='list1'*/>To-Do list</Heading>
<br/>

</Flex>
        <Flex justifyContent='center' >
        <Add addfunction={postaNewTodo}/>
        </Flex>
        <br/>
       

        <br/>
    <Box >
   
    <Flex justifyContent='center'>
    {/* <Box boxSize='sm' border='solid 1px'> */}
    <Grid
  h='200px'
  templateRows='repeat(3, 1fr)'
  templateColumns='repeat(3, 2fr)'
  gap={4}
>
    <Button  colorScheme='green'  onClick={GetData}>Get ALL</Button> 

   
      <Button  leftIcon={<IoMdTrash />}colorScheme='red' onClick={onOpen}> Delete all   </Button> 
  
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Confirmation window</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
          Are you sure you want to delete all of the to-dos ?
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' onClick={onClose}>
              Close
            </Button>
            <Button onClick={deleteAll} variant='ghost'> Proceed </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
  
    <Button colorScheme='facebook'  onClick={GetCertainTodos}>Get Finished</Button>
  
    <Button colorScheme='facebook' onClick={GetCertainTodos2}>Get Pending</Button>
  
    <Button  colorScheme='facebook' onClick={relodpage} > Reload Page </Button>

   
    </Grid>
    {/* </Box> */}
    </Flex>
    </Box>
      {/* {map} */}
                  <br/>
            <br/>
           
            
        

  
    {mapOverTasks}
 


      <br/>
      </Box>}/>
        <Route path="login" element={< Login setIsLoggedIn={setIsLoggedIn} setusername={setusername} />} />
        <Route path="register" element={< Register setRegistered={setRegistered}  />} />
      </Routes>

    </Box>
  )
  
}



