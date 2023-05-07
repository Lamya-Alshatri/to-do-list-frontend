import React,{useState} from 'react'
import axios from "axios"
import { Link } from "react-router-dom";

export default function Register(props) {

    const [email, setEmail] = useState("")

    const [password, setPassword] = useState("")
    
    const [username, setuserName] = useState("")

    const [Mossage, setMossage] = useState('');

    const [Status, setStatus] = useState(null);
    
    const endpoint = process.env.REACT_APP_ENDPOINT


    const registerFunc = (e) => {
        e.preventDefault();
 
        const newUser = {
          // ES6
          email,
          // "email": "email value in the state"
          password,
          username,
        };
    
        axios

        .post(`${endpoint}/users/register`, newUser)
        .then((response) => {
         
          setMossage(response.data.message)
          setStatus(response.status)
          props.setRegistered(true)
        })
        .catch((err) => {
         
          setMossage(err.response.data.message)
          setStatus(err.response.status)
          props.setRegistered(false)
        });
    };
    return (
        <div className="" >


    <div className='Register' style={{backgroundColor:'#FC997C'}}>
    <h4 className=""> Register</h4>
    </div>
    <div className="Register" style={{backgroundColor:'white', marginBottom:'50px'}} >
      <br/>

  <span className=" " >Name </span>
            <input className='' type='text' onChange={(e)=>{
        setuserName(e.target.value)
            }} placeholder='write your name here'/>
           
            <br/>
            <br/>
           
            <span className=" ">password </span>
            <input className=''  type='password'  onChange={(e)=>{
        setPassword(e.target.value)
        
            }} placeholder='write your password here' />
      
            <br/>
            <br/>
            <span className=" ">Email </span>
            <input className='' type='email'  onChange={(e)=>{
        setEmail(e.target.value)}} placeholder='write your email here' />
        

<br/>
<br/>
        {(Status === 201) && ( <div className="Success" >
            {Mossage}
</div>
)}

{(Status === 409 ||Status === 500) && ( <div className="Error" >
            {Mossage}
</div>
)}
<br/>
<input type="submit" className='btn' value="register"onClick={registerFunc}/>
<br/>
<br/>
<Link style={{textDecoration:"none"}} className='link' to="/login">Do you have an account</Link>
<br/>
<br/>


<br/>
  
</div>
          

  

        </div>
    )
}
