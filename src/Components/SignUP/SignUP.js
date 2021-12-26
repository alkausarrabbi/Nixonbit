import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate, useLocation} from 'react-router';
import useAuth from '../../Hooks/useAuth';
import { Alert, CircularProgress, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';


const SignUP = () => {

    const [userRegData,setUserRegData]=useState({});
    const history=useNavigate();
    const location=useLocation()
    const { user, registerUser, isLoading, authError } = useAuth();

    const handleOnChange=e=>{
        const type=e.target.name;
        const name=e.target.value;
        const userData={...userRegData};
        userData[type]=name;
        setUserRegData(userData);
        console.log(userData);
      
    }

    const handleUSerLogin=e=>{
        if (userRegData.password !== userRegData.password2) {
            alert('Your password did not match');
            return
        }
        registerUser(userRegData.email,userRegData.password,userRegData.name,history,location);
        e.preventDefault();
    }

   

    return (
        <Box>
           

            <Typography sx={{ fontWeight: 500, m: 2,mb:5,mt:5, color: '#053361' }} variant="h3" component="div">
                Please SignUP Now
                </Typography>
            
    <Box onSubmit={handleUSerLogin} sx={{ flexGrow: 1,mt:5 }}>
      <Grid container spacing={2}>
        <Grid item lg={12}>
         <form action="">
         <TextField
        //   required
          id="outlined-required"
          label="Name"
          type="text"
          name="name"
          sx={{width:"60%",mb:2}}
          onBlur={handleOnChange}
        />
         <TextField
        //   required
          id="outlined-required"
          label="Email"
          type="email"
          name="email"
          sx={{width:"60%",mb:2}}
          onBlur={handleOnChange}
        />
        <TextField
          id="outlined-required"
          label="Password"
          type="password"
          name="password"
          sx={{width:"60%",mb:2}}
          onBlur={handleOnChange}
        />
        <TextField
          id="outlined-required"
          label="Re-type Password"
          type="password"
          name="password2"
          sx={{width:"60%",mb:2}}
          onBlur={handleOnChange}
        />
         <Button sx={{ width: '50%', m: 1 ,backgroundColor:"#27b6e7"}} type="submit" variant="contained">Register</Button>
        
         </form>
         {isLoading && <CircularProgress />}
                        {user?.email && <Alert severity="success">SignUP successfully!</Alert>}
                        {authError && <Alert severity="error">{authError}</Alert>}
         <NavLink
               style={{ textDecoration: 'none' }}
                to="/login">
                <Button  variant="text">Already User? Please Login</Button>
                 </NavLink>
        </Grid>
        {/* <Grid item xs={4}>
        
        </Grid> */}
      </Grid>
    </Box>
            
        </Box>
    );
};
export default SignUP;