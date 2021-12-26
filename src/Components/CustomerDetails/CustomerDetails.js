import React, { useEffect, useState } from 'react';
import useAuth from '../../Hooks/useAuth';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';


const CustomerDetails = () => {
    const {user}=useAuth();
    const [userData,setUserData]=useState({});
    const [userDataFinal,setUserDataFinal]=useState({});

    const handleOnChange=e=>{
        const type=e.target.name;
        const name=e.target.value;
        const data={...userData};
        data[type]=name;
        setUserData(data);
      
    }
    console.log(userData)
    const handleUserForm=(e)=>{
       const userInfo={name:user?.displayName,email:user?.email,...userData}
       setUserDataFinal(userInfo);
       e.preventDefault();
    }

     // set data to the local storage 
  useEffect(()=>{
    localStorage.setItem("UserDataCollection",JSON.stringify(userDataFinal));
  },[userDataFinal])

    return (
        
            <>
            <Box>
            
            <Typography sx={{ fontWeight: 500, m: 2,mb:5,mt:5, color: '#053361' }} variant="h3" component="div">
            Customer Details
                </Typography>
            <Typography sx={{ fontWeight: 500, m: 2,mb:5,mt:5, color: '#053361' }} variant="body2" component="div">
            please update your profile
                </Typography>
    <Box  sx={{ flexGrow: 1,mt:5 }}>
      <Grid container spacing={2}>
        <Grid item lg={12} sm={12}>
          <form onSubmit={handleUserForm} action="">
         <TextField
        //   required
          id="outlined-required"
          label="Name"
          type="text"
          value={user?.displayName}
          sx={{width:"60%",mb:2}}
         
        />
        <TextField
          id="outlined-required"
          label="Email"
          type="email"
          value={user?.email}
          sx={{width:"60%",mb:2}}
         
        />
        <TextField
        required
          id="outlined-required"
          label="Phone Number"
          type="number"
          name="phone"
          sx={{width:"60%",mb:2}}
          onBlur={handleOnChange}
        />
        <TextField
        required
          id="outlined-required"
          label="Present Address"
          type="text"
          name="present"
          sx={{width:"60%",mb:2}}
          onBlur={handleOnChange}
        />
        <TextField
        required
          id="outlined-required"
          label="Parmanent Address"
          type="text"
          name="parmanent"
          sx={{width:"60%",mb:2}}
          onBlur={handleOnChange}
        />
         <Button sx={{ width: '50%', m: 1,backgroundColor:"#27b6e7" }} type="submit" variant="contained">Update Details</Button>
        
         </form>
                
         
        </Grid>
       
      </Grid>
    </Box>
            
        </Box>
            </>
            
       
    );
};

export default CustomerDetails;