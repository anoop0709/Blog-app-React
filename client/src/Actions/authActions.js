import * as api from "../api";

export const signIn = (formData,Navigate) => async (dispatch)=>{
    try {
        const { data } = await api.usersignin(formData);
        dispatch({type:"AUTH",payload:data})
        Navigate('/')
    } catch (error) {
        console.log(error);
    }
}

export const signUp = (formData,Navigate) => async (dispatch)=>{
    try {
        const { data } = await api.usersignup(formData);
        console.log("Auth action signup ");
        dispatch({type:"AUTH",payload:data})
        Navigate('/')
    } catch (error) {
        console.log(error);
    }
}