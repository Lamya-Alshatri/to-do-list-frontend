import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';
import { StyleFunctionProps } from '@chakra-ui/styled-system';

const root = ReactDOM.createRoot(document.getElementById("root"));



const colors = {
  pallete :{
    darkBlue:'#091540',
    Blue:'#1B2CC1',
    whiteBlue:'#c4d0ff',
    whitePurple:'#B7ADCF',
    purple:'#5856d6',
    indigo:'#470063',
    teal:'#00ADB5',
    gray:'#EEEEEE',
    BlueGreen:'#088F8F'

}
}

/* const layerStyles = {
 
  linkStyle:{
 textDecoration:"none",
 color:'#EEEEEE'
  }
 
 }
  */

 const gstyles = {
  styles:{
global:{
  body: {
    bg: "pallete.whiteBlue"
      }
} 
  }
}

const fonts = {
heading:'heebo',
 body:'heebo'
}

const websiteColor = {
  body:{
    bg:"#c4d0ff"
  }
}

const theme = extendTheme({colors, fonts, styles:{
  global:{
    body:{
      bg:"pallete.whiteBlue"
    }
  }
}})

root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
    <Router>
    <App/>
  </Router>
  </ChakraProvider>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
