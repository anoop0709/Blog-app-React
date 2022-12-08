import React from 'react'
import Post from './Post/Post'
import "./postsStyle.css"
import {useSelector} from "react-redux"


function Posts() {
const posts = useSelector((state)=>state.posts)
console.log(posts);
  return (
    <div>
    <Post/>
    <Post/>
    <Post/>
    <Post/>
    </div>
  )
}

export default Posts
