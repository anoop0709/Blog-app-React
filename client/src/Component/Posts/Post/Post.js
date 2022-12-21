import React, { useEffect } from 'react'
import "./postStyle.css"
import { Button, Card, CardMedia, CardContent, CardActions, Typography } from "@mui/material"
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import DeleteIcon from '@mui/icons-material/Delete';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import moment from "moment";
import {useDispatch, useSelector} from "react-redux";
import {deleteOnePost,likeApost} from "../../../Actions/postActions";




function Post({post,setCurrentId}) {
  console.log(post);
  const user = useSelector((state)=> state.AuthReducer.authData);
 
  let id
  if(user){
    id = user.result.googleId || user.result._id ;
   

  }
  console.log(id +"hello id");
   const dispatch = useDispatch();

   
   const Like = ()=>{
   if(post.likes.length > 0){
      return post.likes.find((like)=>like === (user ? user.result.googleId || user.result._id : null)) ? 
       (
        <>
        <ThumbUpIcon fontSize="small"/>
        &nbsp; {post.likes.length > 2 ? `you and ${post.likes.length-1} others` : `${post.likes.length} Like${post.likes.length > 1 ? "s" : ""}`}
        </>

      ):(
        <>
        <ThumbUpOffAltIcon fontSize="small"/>
        &nbsp; {post.likes.length} {post.likes.length === 1 ? "Like" : "Likes"}
        </>
      )
   }else{
    return  <> <ThumbUpOffAltIcon fontSize="small"/> &nbsp; Like </>
   }
    
   }
  


  return (
    <Card className="card" >
      <CardMedia className="media" image={post.selectedFile} title={post.title}></CardMedia>
      <div className="overlay">
        <Typography variant='h6'>{post.name}</Typography>
        <Typography variant='body2'>{moment(post.createdAt).fromNow()}</Typography>
      </div>
      {(id === post.creator) && (
      <div className="overlay2">
        <Button style={{ color: "white" }} size="small" 
        onClick={() => setCurrentId(post._id)}
        >
          <MoreHorizIcon fontSize="default" />
        </Button>
      </div>
      )}
      <div className="details" >
        <Typography variant="body2" color="textSecondary" key={post._id}>
          {post.tags.map((tag)=>`#${tag}`)}
        </Typography>
      </div>
      <CardContent>
      <Typography variant="h5" color="primary" gutterBottom className="title" >
          {post.title}
        </Typography>
        <Typography variant="body2" gutterBottom className="title" component="p" color="textSecondary" >
          {post.message}
        </Typography>
      </CardContent>
      <CardActions className="cardActions">
        <Button style={{color:"rgb(213, 37, 189)"}} size='small' disabled={!user} onClick={() => dispatch(likeApost(post._id))}>
         
              <Like/>
        </Button>
        {(id === post.creator) && (

        <Button style={{color:"red"}} size='small' onClick={() => dispatch(deleteOnePost(post._id))}>
          <DeleteIcon />
            Delete
            
        </Button>

        )}

      </CardActions>


    </Card>
  )
}

export default Post
