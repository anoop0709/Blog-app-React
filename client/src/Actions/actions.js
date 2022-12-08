import * as api from "../api";

export const getPosts = () => async (dispatch) =>{
    try{
        const data = await api.fetchPosts();
      
        dispatch({type:'FETCHALL',payload:data})
    }catch(err){
        console.log(err.message);
    }
}
export const createPost = (post) => async (dispatch) =>{
    try{
        const data = await api.createPost(post);
        dispatch({type:'CREATE',payload:data})
    }catch(err){
        console.log(err);
    }
}

