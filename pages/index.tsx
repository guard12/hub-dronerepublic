import * as React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { Grid } from '@mui/material'

export default function Index() {
  const { isLoading, isAuthenticated, user } = useAuth0()

  return (<>
    {(isAuthenticated && !isLoading) && <Grid item xs={12}>
      Welcome {user?.email}
    </Grid>}
  </>)
}
