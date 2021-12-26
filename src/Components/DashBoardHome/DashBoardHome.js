import React, { useEffect, useState } from 'react';
import {  Paper, Table, TableBody,  TableContainer,  TablePagination, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import AllDatas from './AllDatas/AllDatas';



const DashBoardHome = () => {
    const [infos,setInfos]=useState([]);
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(9);

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            setInfos(data);
        })
    },[])

    const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

    return (
        <>

<Typography variant="h4" sx={{p:3}} >
         
          </Typography>
        <TableContainer component={Paper}>
       <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
         
         <TableBody>
         <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} sx={{p:5}}>
        {
            infos.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(info=><AllDatas key={info.id} info={info} ></AllDatas>)
        }
      </Grid>
    </Box>
         </TableBody>
       </Table>
     </TableContainer>
     <TablePagination
        rowsPerPageOptions={[9, 27, 90]}
        component="div"
        count={infos.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
          
        </>
    );
};

export default DashBoardHome;