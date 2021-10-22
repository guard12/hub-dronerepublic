import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'

import { AppBar, Toolbar, Typography, Button } from '@mui/material'

export const NavBar = () => {
  const { user, loginWithRedirect, logout } = useAuth0()

  return <AppBar position="relative">
    <Toolbar>
      <Typography variant="h6">Hub</Typography>
      {user ? 
      <Button color="inherit" onClick={() => logout()}>
        Logout
      </Button>
      :
      <Button color="inherit" onClick={() => loginWithRedirect()}>
        Login
      </Button>
      }
    </Toolbar>
  </AppBar>
}