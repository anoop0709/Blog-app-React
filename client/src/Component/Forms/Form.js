import React, { useState } from 'react'
import { Button, TextField, Typography, Paper } from "@mui/material"
import "./formStyle.css"
import Filebase from "react-file-base64"
import {useDispatch} from "react-redux"
import { createPost } from '../../Actions/actions'

function Form() {

  const [postData,setpostData] = useState({
    creator:'',
    title:'',
    message:'',
    tags:'',
    selectedFile:''
  })
  const dispatch = useDispatch()


  const handleSubmit = (e)=>{
    e.preventDefault();
    dispatch(createPost(postData))

  }

  const clear = ()=>{
    
  }
  return (
    <Paper className="paper">
      <form className="form" noValidate autoComplete="off" onSubmit={handleSubmit}>
        <Typography variant="h6">Creating a Memory</Typography>
        <TextField 
        variant="outlined"
        name="Creator" 
        label="Creator" 
        fullWidth 
        value={postData.creator}
        onChange={(e)=>{
          setpostData({...postData,creator:e.target.value})
        }}
         />
         
          <TextField 
        variant="outlined"
        name="title" 
        label="Title" 
        fullWidth 
        value={postData.title}
        onChange={(e)=>{
          setpostData({...postData,title:e.target.value})
        }}
         />
          <TextField 
        variant="outlined"
        name="message" 
        label="Message" 
        fullWidth 
        value={postData.message}
        onChange={(e)=>{
          setpostData({...postData,message:e.target.value})
        }}
         />
          <TextField 
        variant="outlined"
        name="tag" 
        label="Tag" 
        fullWidth 
        value={postData.tag}
        onChange={(e)=>{
          setpostData({...postData,tag:e.target.value})
        }}
         />
         <div>
           <Filebase className="fileInput"
           type="file"
           multiple = {false}
           onDone = {({base64})=>setpostData({...postData,selectedFile:base64})}

           />
         </div>
         <Button 
         className="buttonSubmit" 
         variant="contained" 
         color="primary"
         type = "submit"
         size = "large"
         fullWidth
         >
           Submit

         </Button>
         <Button  
         variant="contained" 
         color="secondary"
         size = "small"
         fullWidth
         onClick = {clear}
         >
           Clear

         </Button>
      </form>
    </Paper>
  )
}

export default Form
