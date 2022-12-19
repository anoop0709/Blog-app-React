import React, { useEffect, useState } from 'react'
import Posts from '../Posts/Posts';
import Form from '../Forms/Form';
import { Container, Grow, Grid, Paper, Typography } from "@mui/material"
import { getPosts } from "../../Actions/postActions"
import { useDispatch,useSelector } from "react-redux"

function Home() {
  const user = useSelector((state)=>state.AuthReducer.authData);
  const dispatch = useDispatch();
  const [currentId, setCurrentId] = useState(null);

  console.log(user);

  useEffect(() => {
    dispatch(getPosts());

  }, [dispatch,currentId,user])
  return (
    <Grow in>
      <Container>
        <Grid container justify="space-between"  >
          <Grid xs={12} sm={7} marginRight="5rem">
            <Posts setCurrentId={setCurrentId} />
          </Grid>
          <Grid xs={12} sm={4}>
             <Form currentId={currentId} setCurrentId={setCurrentId} />
          </Grid>
        </Grid>
      </Container>
    </Grow>
  )
}

export default Home
