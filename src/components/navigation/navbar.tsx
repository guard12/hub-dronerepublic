import React from 'react'
import Link from 'next/link'
import { useAuth0 } from '@auth0/auth0-react'

import { AppBar, Toolbar, Typography, Button, Box} from '@mui/material'

export const NavBar = () => {
  const { user, loginWithRedirect, logout } = useAuth0()

  return <AppBar position="relative">
    <Toolbar>
      <Typography variant="h6" >Hub</Typography>
      <Box sx={{ flexGrow: 1 }} marginLeft="2rem">
        {user && <Link href="/creators">
          <Button color="inherit">Tvorcovia</Button>
        </Link>}
      </Box>
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