import React,{useState} from 'react'
import "./Authstyle.css"
import {Avatar,Grid,Typography,Paper,Button,Container} from "@mui/material"
import LockIcon from '@mui/icons-material/Lock';
//import { GoogleOAuthProvider} from "@react-oauth/google"
import { GoogleLogin } from "react-google-login"
import { gapi } from "gapi-script";
import Input from "../Input/Input"
import {useDispatch} from "react-redux"
import {useNavigate} from "react-router-dom"
import {signIn,signUp} from "../../Actions/authActions"
const intialState = {firstname:"",lastname:"",email:"",password:"",confirmpassword:""}
function Auth() {


    gapi.load("client:auth2", () => {
        gapi.client.init({
          clientId:
            "1068879100148-ckakrtpn2rrdb9dp84hi9qtpcon1igfr.apps.googleusercontent.com",
          plugin_name: "chat",
        });
      });

    const [showPassword,setShowPassword] = useState(false);
    const [isSignUp,setIsSignUp] = useState(false);
    const [formData,setFormData] = useState(intialState);
    const dispatch = useDispatch();
    const Navigate = useNavigate()


   const handleShowPassword = ()=>{
       setShowPassword((prevShowPassword) => !prevShowPassword)
   }
   const handleSubmit = (e)=>{
       e.preventDefault();
       console.log(formData);
       console.log("submit from signup");
       if(isSignUp){
           dispatch(signUp(formData,Navigate))

       }else{
        dispatch(signIn(formData,Navigate))
       }

   }
   const handleChange = (e)=>{
       setFormData({...formData,[e.target.name]:e.target.value});

   }
   const switchMode = ()=>{
            setIsSignUp((prevIsSignUp) => !prevIsSignUp)
            setShowPassword(false)
   }

   const googleSuccess = async (res)=>{
       console.log(res);
             const result = await res.profileObj;
             const token = await res.tokenId;    
       
       try {
           dispatch({type:"AUTH",payload:{result,token}});
           Navigate("/");
       } catch (error) {
           
       }

   }
   const googleFailer = (error)=>{
       console.log(error);
       console.log("login failed");
   }
  return (
  <Container component="main" maxWidth="xs">
      <Paper className="paper signIn" elevation={3}>
          <Avatar className="avatar">
              <LockIcon style={{color:"purple"}}/>
          </Avatar>
          <Typography variant="h5">{isSignUp ? "Sign Up": "Sign In"}</Typography>
         <form className="form" onSubmit={handleSubmit}>
             <Grid container gap="2rem" >
                 {
                     isSignUp && (
                         <>
                            <Input name="firstname" label="First Name" handleChange={handleChange} autoFocus />
                            <Input name="lastname" label="Last Name" handleChange={handleChange}  />
                         </>
                     )
                 }
                  <Input name="email" label="Email" handleChange={handleChange} type="email" />
                  <Input name="password" label="Password" handleChange={handleChange} type={showPassword ? "text" : "password"} handleShowPassword={handleShowPassword}/>
                  {isSignUp && <Input name="confirmpassword" label="Repeat password" handleChange={handleChange} type="password"/>}
             </Grid>
             <Button fullWidth type="submit" variant="contained" color="primary" className="submit">
             {isSignUp ? "Sign Up": "Sign In"}
             </Button>
             < GoogleLogin
             clientId = "1068879100148-ckakrtpn2rrdb9dp84hi9qtpcon1igfr.apps.googleusercontent.com"
            //  onClick={()=>{}}
             render = {(renderProps)=>(
                <Button 
                onClick = {renderProps.onClick}
                disabled = {renderProps.disabled}
                >
                    Google Sign In

                </Button>
             )
             }
             onSuccess = {googleSuccess}
             onFailure = {googleFailer}
             cookiePolicy = "single_host_origin"
             />
             <Grid container justify="flex-end">
                 <Grid item>
                    <Button onClick = {switchMode}>
                        {isSignUp ? "Already have an account ? Sign In" : "Don't have an account ? Sign Up"}

                    </Button>
                 </Grid>

             </Grid>
         </form>

      </Paper>

  </Container>
  )
}

export default Auth
