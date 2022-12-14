import React, { useEffect, useState } from 'react'
import { Button, TextField, Typography, Paper } from "@mui/material"
import "./formStyle.css"
import Filebase from "react-file-base64"
import {useDispatch,useSelector} from "react-redux"
import { createPost,updatedPost } from '../../Actions/postActions'

function Form({currentId,setCurrentId}) {
  const post = useSelector((state)=> currentId ? state.posts.find((p)=>p._id === currentId ) : null)
  const [postData,setpostData] = useState({
    title:'',
    message:'',
    tags:'',
    selectedFile:''
  })
  const user = JSON.parse(localStorage.getItem('profile'));
  const dispatch = useDispatch()
  useEffect(()=>{
   if(post) setpostData(post);

  },[post])

  const handleSubmit = (e)=>{
    e.preventDefault();

    if(currentId){
      if(user){
        dispatch(updatedPost({currentId,...postData,name:user.result.name}));
      }
    }else{
      if(user){
        dispatch(createPost({...postData, name:user.result.name}));
      }
    }
    clear();
   
  }

  const clear = ()=>{
    setCurrentId(null);
    setpostData({
      title:'',
      message:'',
      tags:'',
      selectedFile:''
    })
  }
  return (
    <Paper className="paper">
      <form className="form" noValidate autoComplete="off" onSubmit={handleSubmit}>
        <Typography variant="h6"> {currentId ? 'Edit' : 'Creat' } a Memory </Typography>
         
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
        value={postData.tags}
        onChange={(e)=>{
          setpostData({...postData,tags:e.target.value.split(',')})
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
