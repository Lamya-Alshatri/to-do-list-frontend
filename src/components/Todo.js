import React, { useState } from 'react'

export default function Todo (props) {

    const {_id,
        title, isCompleted} = props.task


      return (
    <div className='To'>
     
          <ul className='Ul1'>

          <h2 className='Mar'   style={{ textDecoration:isCompleted? 'line-through':'none'}}>{title} </h2>
          <div className='ite'>
            
          <li className='item1' ><form><p> <input className = "check"  type="checkbox"  name = "checkbox3"   defaultChecked = {isCompleted} onClick={()=>{props.checkAndUpdate1(_id,!isCompleted)}}/>
          <label className='Clo' htmlFor='Clo'  ><span style={{color:'#2E4C6D'}} >Finished </span>: <span style={{color:'#FC997C'}}>Pending</span></label></p></form>
        

          <div className='container'>
          <button className='btn DELETE'  onClick={()=>{
            props.deleteOneTodo(_id)}}>Delete</button>
            </div>
            </li> 
            </div>
  </ul>    
          
      

    </div>)
}
