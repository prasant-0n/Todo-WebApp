import React from 'react'
import { Typography } from '@mui/material';

const Header = () => {
    return (
        <div >
            <Typography variant="h4" component="h1" gutterBottom style={{ textAlign: 'center', padding: '20px', maxWidth: '160%' }}>
                Todo List
            </Typography>
        </div>
    )
}

export default Header
