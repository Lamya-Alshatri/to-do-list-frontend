import React,{useState} from 'react'
import axios from "axios"
import {  Link } from "react-router-dom";


export default function Login(props) {

    

    const [email, setEmail] = useState("")

    const [password, setPassword] = useState("")

    // const [WrongUser, setWrongUser] = useState(false);

    const [LoginStatus, setLoginStatus] = useState(null);

    const [message, setMessage] = useState("");

    // 200 400 404
    const endpoint = process.env.REACT_APP_ENDPOINT

    const loginFunc = (e) => {

        e.preventDefault();

 

        const UserInfo = {
        email,
        password,
        }

        
        axios
        .post(`${endpoint}/users/login`,UserInfo)
        .then((response) => {

            setLoginStatus(response.status)

            setMessage(response.data.message)

        
          props.setIsLoggedIn(true)
          props.setusername(response.data.username)
        })
        .catch((err) => {
  

          props.setIsLoggedIn(false)

          setLoginStatus(err.response.status)

          setMessage(err.response.data.message)

          props.setusername(null)
        });
    };

    // const DeleteUser = (e) =>{

    //     e.preventDefault();

    //     console.log("logout")


       
    //     axios.delete(`${endpoint}/users/login/${email}`)
    //     .then(res => {
    //     console.log(res)
    //     })
    //     .catch(err => {
    //     console.error(err); 
    //     })
    // }
    
       
    return (
        
        <div className="Login">
         
         <div className='Register' style={{backgroundColor:'#FC997C'}}>
  <h4 className=''>Login</h4>
  </div>
  <div className="Register" style={{backgroundColor:'white'}}>
    <br/>

    <span className =" ">Email </span>
<input type="email" className=" " placeholder="lam.alshatri.1@gmail.com"  onChange={(e)=>{
        setEmail(e.target.value)}}  value = {email}  />
  



<br/>

<br/>
<div className="">
<span className=" ">Password </span>
  <input  className=" " placeholder="Lam86486" type='password' onChange={(e)=>{
        setPassword(e.target.value)}}  value = {password}  />
<br/>    
            <br/>

            {(LoginStatus === 200) && ( <div className="Success" >
            {message}
</div>
)}

{(LoginStatus === 400 ||LoginStatus === 404) && ( <div className="Error" >
{message}
</div> )}
          


            <br/>        
<input type="submit" className='btn' value="Login"onClick={loginFunc}/>
<br/>
<br/>
<Link className= '' style={{textDecoration:'none'}} to="/register">Don't Have An Account</Link>
<br/>
<br/>
  </div>
</div>
        </div>
    )
}
