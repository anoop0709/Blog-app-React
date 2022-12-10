import React from 'react';
import { Container } from "@mui/material"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

import './style.css'
import Navbar from "../src/Component/Navbar/Navbar"
import Home from './Component/Home/Home';
import Auth from './Component/Auth/Auth';


function App() {

  return (
    <Router>
      <Container className="containerGrid" >
        <Navbar />
         <Routes>
          <Route path="/" exact element={ <Home />} /> 
          <Route path="/auth" element={<Auth />} />  
        </Routes>
      </Container >
    </Router >

  )
}

export default App
