// import React from 'react'

import { Box, Button, Grid, TextField } from "@mui/material"

const Empform = () => {
  return (
    <Box sx={{ flexGrow: 1 }}
    style={{ margin :'12%'}}
>
      <Grid container spacing={1}>
        <Grid item xs={6}md={12} sm={12} >
            <TextField
            fullWidth
            id="outlined-required"
            label="Employee Name"
            defaultValue=""
            sx={{input: { background: "white" }}}
            />
        </Grid>
        <Grid item xs={6}md={12} sm={12} >
        <TextField
            fullWidth
            id="outlined-required"
            label="Designation"
            defaultValue=""
            sx={{input: { background: "white" }}}
            />
        </Grid>

        <Grid item xs={6} md={12} sm={12}>
        <TextField
            fullWidth
            id="outlined-required"
            label="Location"
            defaultValue=""
            sx={{input: { background: "white" }}}
            />
        </Grid>
        <Grid item xs={6} md={12} sm={12}>
        <TextField
            fullWidth
            id="outlined-required"
            label="Salary"
            defaultValue=""
            sx={{input: { background: "white" }}}
            />
        </Grid>
        
        
        <Grid item md={12}>
        <Button variant="contained" sx={{ border:"2px", backgroundColor:"#1a3385e2" }}>Add</Button>
        </Grid>
        
      </Grid>
    </Box>
  )
}

export default Empform
