import { Link, Flex, Box, Spacer, Heading, HStack } from "@chakra-ui/react"
import { Link as ReactLink} from "react-router-dom"

export default function Header(props) {


  return (
    <Flex  as="nav" bg='pallete.darkBlue' alignItems='center' gap='10px' h='60px'>
    
       <HStack spacing='20px'>
    <Link color='white'  fontSize='large'  fontWeight='bold' ml='10px' as={ReactLink} to="/home"> Home</Link>
 
  

    <Link fontSize='large' color='white' fontWeight='bold' as={ReactLink} to="/register">Register</Link>

  
  
    <Link fontSize='large'  color='white' fontWeight='bold' as={ReactLink} to="/login" >Login</Link>
    </HStack>
  
    <Spacer/>
    <Box as="button" size='sm' px={4} h={8}   fontWeight='bold' fontSize='large'  borderRadius='md' bg='pallete.whiteBlue' color='pallete.Blue' m='10px' className='btn' onClick={props.logout}>logout</Box>
    <Heading fontSize='lg' color='white' as="h3" m='10px' size='md'>Welcome {props.name}</Heading>
   

  </Flex>
  )
}
