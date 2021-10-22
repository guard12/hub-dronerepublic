import * as React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { Grid } from '@mui/material'

import { NavBar } from '../src/components/navigation'

export default function Index() {
  const { isLoading, user } = useAuth0()

  return (
    <Grid container component="main">
      <Grid item xs={12}>
        <NavBar />
      </Grid>

      {!isLoading && <Grid item xs={12}>
        Welcome {user?.email}
      </Grid>}

    </Grid>
  )
}
