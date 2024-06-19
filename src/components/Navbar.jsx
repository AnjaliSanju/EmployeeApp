// import React from 'react'

import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material"
import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ background: '#1a3385e2' }} >
        <Toolbar>
          <Typography variant="h6" style={{ textAlign: 'left' }}component="div" sx={{ flexGrow: 1 }}>
            Employee App
          </Typography>
          
          <Link to={'/'}>
            <Button color="inherit" style={{ color:'white'}}>Home</Button>
          </Link>
          <Link to={'/forms'}>
            <Button color="inherit"style={{ color:'white'}}>Add Employee</Button>
          </Link>

        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Navbar
