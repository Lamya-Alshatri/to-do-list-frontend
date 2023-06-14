import React from 'react'
import {
  ListItem,
  ListIcon,
  Heading,
  List,
  Box,
  Button
} from '@chakra-ui/react'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure 
} from '@chakra-ui/react'
import { AiFillThunderbolt } from "react-icons/ai";
import {
  FormControl,
  FormLabel,
  Checkbox
} from '@chakra-ui/react'
export default function Todo (props) {

  const { isOpen, onOpen, onClose } = useDisclosure()
    const {_id,
       title, isCompleted} = props.task


      return (
    <Box className='To'>
     
          <List  h='200px' border='solid 1px gray' m='20px'  >
          
          <ListItem mt='5' ml='10' >
          <Box as='div' border='solid 1px gray' mb='15px' mr='15px' >
          <Heading m='3' as='h4'size='lg' className='Mar'   style={{ textDecoration:isCompleted? 'line-through':'none'}}>  <ListIcon as={AiFillThunderbolt} color='green.500' /> {title} </Heading>
          </Box>
        
          <  FormControl> 
          {/* <input className = "check"  type="checkbox"  name = "checkbox3"   defaultChecked = {isCompleted} onClick={()=>{props.checkAndUpdate1(_id,!isCompleted)}}/> */}
          
          <Box as='div'   onClick={(event)=>{ if (event.target.nodeName !== 'INPUT') props.checkAndUpdate1(_id,!isCompleted)}}  >  
<Checkbox colorScheme='teal' defaultChecked={isCompleted} ></Checkbox>
</Box>

          <FormLabel className='Clo' htmlFor='Clo'  ><span style={{color:'#008080'}} >Finished </span>: <span style={{color:'white'}}>Pending</span></FormLabel>
          </FormControl>
        

          <Box as='div'  >
          <Box as='Button' fontWeight='light'  fontSize='15px' pr='10px' pl='10px' pt='3px' pb='3px' color='white' size='lg' borderRadius='5' bg='pallete.BlueGreen'onClick={onOpen} >Delete</Box>
       

<Modal isOpen={isOpen} onClose={onClose}>
  <ModalOverlay />
  <ModalContent>
    <ModalHeader>The to-do</ModalHeader>
    <ModalCloseButton />
    <ModalBody>
     Are you sure you want to delete the to-do ?
    </ModalBody>

    <ModalFooter>
      <Button colorScheme='blue' mr={3} onClick={onClose}>
        Close
      </Button>
      <Button variant='ghost' onClick={(event)=>{ if (event.target.nodeName !== 'INPUT') props.deleteOneTodo(_id)} } >Proceed</Button>
    </ModalFooter>
  </ModalContent>
</Modal>
            </Box>

            </ListItem> 
           
  </List>    
    </Box>)
}
