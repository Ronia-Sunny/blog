import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'

const Navbar = () => {
  return (
    <div>
        <AppBar>
            <Toolbar>
                <Typography color={'blue'} sx={{ flexGrow:1}} align='left'>BLOG</Typography>
                <Button variant ='contained'><Link to={'/Home'}>Home</Link></Button>
                <Button variant='contained'><Link to={'/Add'}>Add Blog</Link></Button>
            </Toolbar>
        </AppBar>

    </div>
  )
}

export default Navbar