import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { useForm } from "react-hook-form";

import { Grid, TextField } from '@mui/material'

export const FirstStep = () => {
  const { user } = useAuth0()
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  if(!user) return <div>Please login</div>

  return <Grid container>
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextField defaultValue="test" {...register("example")} />
      
      <TextField {...register("exampleRequired", { required: true })} />

      {errors.exampleRequired && <span>This field is required</span>}
      
      <input type="submit" />
    </form>
  </Grid>
}