import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const AllDatas = (props) => {
    const {title,body}=props.info
    return (
        <>
        <Grid item xs={4}>
        <Card sx={{ minWidth: 275 }}>
      <CardContent>
        
        <Typography variant="h5" component="div" sx={{mb:2,color:"#074f67"}}>
          {title}
          
        </Typography>
        
        <Typography variant="body2">
        {body}
          
        </Typography>
      </CardContent>
      
    </Card>
          
          </Grid>
            
        </>
    );
};

export default AllDatas;