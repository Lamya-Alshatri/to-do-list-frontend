import React,{useState} from 'react';
import {Input, Box, HStack } from '@chakra-ui/react'


const Add = (props) => {
    const [title, setTitle] = useState('')
const CreateNewTodo = () =>{
    props.addfunction({title:title,isCompleted:false})
}
    return (
        <HStack> 
            
                <Box as='button' borderRadius='lg'  fontWeight='normal' h={14} bg='pallete.darkBlue' color='pallete.whiteBlue' px={4} onClick={CreateNewTodo}>Create a new To-Do</Box>
            <Input  size='md'h={14} type="text" borderColor='pallete.darkBlue' placeholder="   Write your To-Do here"onChange={(e)=>{
        setTitle(e.target.value)
            }}/>
        </HStack>
    );
}

export default Add;
