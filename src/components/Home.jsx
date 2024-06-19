import '@fontsource/roboto/500.css';


import { Card, CardContent, Chip, Grid, Typography } from "@mui/material"
import axios from "axios"
// Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
import { useEffect, useState } from "react"

const Home = () => {
  const [data,setdata]=useState([]);
  useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/users').then((res)=>{
      console.log(res.data);
      setdata(res.data);

    })
  },[])
  return (
    <div>
        <h2 className='employeeTitle'>Employee Information</h2><hr />
        {data.map((item)=>(
<Grid  key={item.id} container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} >

  <Grid item xs={12} sx={{  }} >
    {/* --------  */}
  <Card className="employeeCard" sx={{ maxWidth: 345 }}>
  <CardContent>
    
        
   
    <Typography variant="subtitle1" gutterBottom component="div" style={{ color:'#eb6f30' }}>
    <Chip label={item.id} style={{ margin:'10px' }} />{item.name}
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


</div>
  )
}

export default Home
