import * as React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { Grid } from '@mui/material'

export default function Creators() {
  const { isLoading, isAuthenticated } = useAuth0()

  if(isLoading || !isAuthenticated) return <div>Please login</div>

  return (
    <Grid container>
      List of creators
    </Grid>
  )
}
