import React,{useEffect} from 'react';
import {useDispatch} from "react-redux"
import { Container, AppBar, Typography, Grow, Grid } from "@mui/material"
import memories from "./Images/memories.png";
import Posts from './Component/Posts/Posts';
import Form from './Component/Forms/Form';
import './style.css'
import {getPosts} from "./Actions/actions"


function App() {
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getPosts());

  },[dispatch])
  return (
    <Container maxWidth='lg'>
      <AppBar className="appBar" position='static' color='inherit'>
        <Typography  className="heading" variant='h2' align="center">Memories</Typography>
        <img src={memories} alt="Memories" height='50' className="image"/>
      </AppBar>
      <Grow in>
        <Container>
          <Grid container justify="space-between" spacing={3} alignItems="stretch" >
            <Grid xs={12} sm={7}>
                <Posts/>
            </Grid>
            <Grid xs={12} sm={4}>
                <Form/>
            </Grid>
          </Grid>
        </Container>

      </Grow>
    </Container>

  )
}

export default App
