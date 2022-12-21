import React,{useEffect,useState} from 'react'
import Posts from '../Posts/Posts';
import Form from '../Forms/Form';
import { Container, Grow, Grid } from "@mui/material"
import {getPosts} from "../../Actions/postActions"
import {useDispatch} from "react-redux"

function Home() {
    const dispatch = useDispatch();
    const [currentId,setCurrentId] = useState(null);
  
    useEffect(()=>{
      dispatch(getPosts());
  
    },[dispatch,currentId])
  return (
    <Grow in>
<<<<<<< HEAD
      <Container>
        <Grid container justify="space-between"  >
          <Grid xs={12} sm={7} marginRight="5rem">
            <Posts setCurrentId={setCurrentId} />
          </Grid>
          <Grid xs={12} sm={4}>
             <Form currentId={currentId} setCurrentId={setCurrentId} />
          </Grid>
=======
    <Container>
      <Grid container  justify="space-between"  >
        <Grid xs={12} sm={7} marginRight="5rem">
            <Posts setCurrentId = {setCurrentId} />
>>>>>>> parent of a05d19f0 (finished project)
        </Grid>
        <Grid xs={12} sm={4}>
            <Form currentId = {currentId} setCurrentId = {setCurrentId} />
        </Grid>
      </Grid>
      </Container>
      </Grow>
  )
}

export default Home
