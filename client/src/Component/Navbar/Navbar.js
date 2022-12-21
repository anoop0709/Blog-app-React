import React, { useEffect, useState } from 'react'
import { AppBar, Avatar, Button, Toolbar, Typography } from "@mui/material";
import "./Navbar.css"
import memories from "../../Images/memories.png";
import { Link,useNavigate,useLocation} from "react-router-dom"
import {useDispatch} from "react-redux";

function Navbar() {

    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    useEffect(()=>{
        let token;
        if(user){
            token = user.token;
            navigate('/')
        }

        setUser(JSON.parse(localStorage.getItem('profile')))
    },[location])
    const logout = ()=>{
        dispatch({type:"LOGOUT"});
        navigate("/");
        setUser(null);

    }
    return (
        <AppBar className="appBar" position="static" color='inherit'>
            <div className="brandContainer">
                <Typography component={Link} to="/" className="heading" variant='h2' style={{ textDecoration: "none" }}>Memories </Typography>
                <img src={memories} alt="Memories" height='60' />
            <Toolbar className="toolbar">
                {user ? (

                    <div className="profile">
                        <Avatar className="purple" alt={user.result.name} src={user.result.imageUrl}>{user.result.name.charAt(0)}</Avatar>
                        <Typography className="userName" variant="h6">{user.result.name}</Typography>
                        <Button className="logout" variant="contained" color="secondary" onClick={logout}>Log Out</Button>

                    </div>

                ) : (
                    <Button component={Link} to="/auth" variant="contained" color="primary">Sign In</Button>

                )}
            </Toolbar>
            </div>



        </AppBar>
    )
}

export default Navbar
