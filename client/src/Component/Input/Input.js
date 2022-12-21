import React from 'react'
import {TextField,IconButton,Grid,InputAdornment} from "@mui/material"
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

function Input({name,handleChange,label,autoFocus,half,type,handleShowPassword}) {
  return (
   <Grid xs={12} sm={half ? 6 : 12}>
       <TextField
       name={name}
       label={label}
       type={type}
       required
       variant="outlined"
       fullWidth
       onChange={handleChange}
       autoFocus = {autoFocus}
       InputProps = {name === "password" ? {
           endAdornment:(
               <InputAdornment position="end">
                   <IconButton onClick={handleShowPassword}>
                       {type === "password" ? <VisibilityOffIcon/> : <VisibilityIcon/>}

                   </IconButton>
               </InputAdornment>
           )
       }:null}
       >

       </TextField>

   </Grid>
  )
}

export default Input
