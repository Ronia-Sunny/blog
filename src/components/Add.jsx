import { Button, TextField } from '@mui/material'
import React from 'react'

const Add = () => {
  return (
    <div style={{paddingTop:"50px"}}>
        <TextField variant='outlined' label='Blog Name'/><br /><br />
        <TextField variant='outlined' label='Description'/><br /><br />
        <TextField variant='outlined' label='Author'/><br /><br />
        <Button variant ='filled' color='success'>ADD</Button>

    </div>
  )
}

export default Add