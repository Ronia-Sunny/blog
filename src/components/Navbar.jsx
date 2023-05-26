import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
        <AppBar>
            <Toolbar>
                <Typography color={'blue'} sx={{ flexGrow:1}} align='left'>BLOG</Typography>
                <Button variant ='filled'><Link to={'/Home'}>Home</Link></Button>
                <Button variant='filled'><Link to={'/Add'}>Add Blog</Link></Button>
            </Toolbar>
        </AppBar>

    </div>
  )
}

export default Navbar