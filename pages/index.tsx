import * as React from 'react'
import { useSession } from "next-auth/react"
import { Grid } from '@mui/material'

import { NavBar } from '../src/components/navigation'

export default function Index() {
  const { data: session } = useSession()

  return (
    <Grid container component="main">
      <Grid item xs={12}>
        <NavBar />
      </Grid>

      {session && <Grid item xs={12}>
        Welcome {session.user.email}
      </Grid>}

    </Grid>
  )
}
