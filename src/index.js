import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider, extendTheme } from '@chakra-ui/react'



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
    gray:'#EEEEEE'

}
}

const layerStyles = {
 
  linkStyle:{
 textDecoration:"none",
 color:'#EEEEEE'
  }
 
 }

const fonts = {
heading:'Courier new',
 body:'heebo'
}

const theme = extendTheme({colors, fonts, layerStyles})

root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
    <Router>
    <App />
  </Router>
  </ChakraProvider>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
