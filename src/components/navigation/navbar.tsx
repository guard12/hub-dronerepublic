import React from 'react'

import { AppBar, Toolbar, Typography, Button } from '@mui/material'

export const NavBar = () => {

  return <AppBar position="relative">
    <Toolbar>
      <Typography variant="h6">Hub</Typography>
      <Button color="inherit">
        Logout
      </Button>
      
      <Button color="inherit">
        Login
      </Button>
    </Toolbar>
  </AppBar>
}