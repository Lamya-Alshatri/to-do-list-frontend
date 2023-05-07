import React,{useState} from 'react';



const Add = (props) => {
    const [title, setTitle] = useState('')
const CreateNewTodo = () =>{
    props.addfunction({title:title,isCompleted:false})
}
    return (
        <div className="Add">
               <button className="btn button" onClick={CreateNewTodo}>Create a new To-Do</button>
            <input className="border" type="text" placeholder="   Write your To-Do here"onChange={(e)=>{
        setTitle(e.target.value)
            }}/>
        </div>
    );
}

export default Add;
