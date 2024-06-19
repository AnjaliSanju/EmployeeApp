
// import axios from "axios"
import '@fontsource/roboto/500.css';


import { Card, CardContent, Chip, Grid, Typography } from "@mui/material"
import axios from "axios"
// Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
import { useEffect, useState } from "react"

const Test = () => {
  const [data,setdata]=useState([]);
  useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/users').then((res)=>{
      console.log(res.data);
      setdata(res.data);

    })
  },[])
  return (
    <div>
        <h2>Employee Information</h2>
        {data.map((item)=>(
<Grid  key={item.id} container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} >

  <Grid item xs={6} md={8}>
    {/* --------  */}
  <Card className="employeeCard" sx={{ maxWidth: 345 }}>
  <CardContent>
    
        <Chip label={item.id} />
   
    <Typography variant="subtitle1" gutterBottom component="div" style={{ color:'#eb6f30' }}>
        {item.name}
    </Typography>
    <Typography sx={{ mb: 1.5 }} color="text.secondary" >
        Email id:{item.email}
    </Typography>

  </CardContent>
  </Card>
    {/* ----------  */}
  </Grid>
  </Grid>
  ))}




        {/* ---------------------  */}
       {/* <TableContainer>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell align='center'>Name</TableCell>
          <TableCell align='center'>Email</TableCell>
          <TableCell align='center'>Phone Number</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
      {data.map((item)=>(
        <TableRow
        key={item.firstName}
        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
        >
                <TableCell align='center'>{item.id}</TableCell>
                <TableCell align='center'>{item.name}</TableCell>
                <TableCell align='center'>{item.email}</TableCell>

            </TableRow>
            ))}

      </TableBody>
      </Table>
    </TableContainer> */}
    </div>
  )
}

export default Test
