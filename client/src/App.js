import React from 'react';
import {Container,AppBar,Typography,Grow,Grid} from "@mui/material"
import memories from "./Images/memories.png"

function App() {
  return (
  <Container maxWidth='lg'>
    <AppBar position='static' color='inherit'>
      <Typography variant='h2' align="center"> My Blogs</Typography>
      <img src={memories} alt="Memories" height='400'/>
    </AppBar>
  </Container>
  )
}

export default App
