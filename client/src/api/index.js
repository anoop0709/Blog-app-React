import axios from "axios"
const API = axios.create({baseURL:"http://localhost:3001"});

API.interceptors.request.use((req)=>{
    if(localStorage.getItem('profile')){
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
        return req;

    }
})


export const fetchPosts = () => API.get('/posts');
export const createnewPost = (newPost) => API.post('/posts',newPost);
export const updateOnePost = (id,updatedPost) => API.patch(`/posts/${id}`,updatedPost);
export const deletePost = (id) => API.delete(`/posts/${id}`);
export const likePost = (id) => API.patch(`/posts/${id}/likePost`);


export const usersignin = (FormData)=> API.post('/user/signin',FormData);
export const usersignup = (FormData)=> API.post('/user/signup',FormData);