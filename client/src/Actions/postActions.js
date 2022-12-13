import * as api from "../api";

export const getPosts = () => async (dispatch) =>{
    try{
        const{ data }= await api.fetchPosts();
        dispatch({type:'FETCHALL',payload:data})
    }catch(err){
        console.log(err);
    }
}



export const createPost = (post) => async (dispatch) =>{
    try{
        const data = await api.createnewPost(post);
        console.log(data.data.newPost);
        dispatch({type:'CREATE',payload:data.data.newPost})
    }catch(err){
        console.log(err);
    }
}

export const updatedPost = (id,post) => async (dispatch)=>{
    try {
        const {data} = await api.updateOnePost(id,post);
        console.log(data);
        console.log(234567);
        dispatch({type:'UPDATE',payload:data})
        
    } catch (error) {
        console.log(error);
    }
}

export const deleteOnePost = (id) => async (dispatch)=>{
    try {
        await api.deletePost(id);
        dispatch({type:'DELETE',payload:id})
    } catch (error) {
        console.log(error);
    }

}

export const likeApost = (id) => async (dispatch) =>{
    try {
        const {data} = await api.likePost(id);
        dispatch({type:'LIKEPOST',payload:data})
    } catch (error) {
        console.log(error);
    }
}
