import React from 'react'
import { Grid, Paper, Avatar, Typography, TextField, Button } from '@material-ui/core'
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import { Header } from './Header'
import { Footer } from './Footer'
import { Link } from 'react-router-dom'

export const RegisterForm = () => {
    const paperStyle = { 
        padding: 20, 
        width: 500, 
        margin: "20px auto" ,
        height: '55vh',

    }
    const headerStyle = { 
        margin: 0 
    }
    const avatarStyle = { 
        backgroundColor: '#f5ba13' 
    }
    const marginTop = { 
        marginTop: 5 
    }
    const btnstyle={
        margin:'8px 0',
        backgroundColor :'#f5ba13',
        color : 'white' 
    }

    return (
        <div>
            <Header />
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}>
                        <AddCircleOutlineOutlinedIcon />
                    </Avatar>
                    <h2 style={headerStyle}>Sign Up</h2>
                    <Typography variant='caption' gutterBottom>Please fill this form to create an account !</Typography>
                </Grid>
                
                    <TextField fullWidth style={{margin :'10px 0'}} label='Name' placeholder="Enter your name" />
                    <TextField fullWidth style={{margin :'10px 0'}} label='Email' placeholder="Enter your email" />
                    <TextField fullWidth style={{margin :'10px 0'}} label='Password' placeholder="Enter your password"/>
                    <TextField fullWidth style={{margin :'10px 0'}} label='Confirm Password' placeholder="Confirm your password"/>
                    
                    <Button type='submit' style={btnstyle} variant='contained' color='primary'>Sign up</Button>
                

                <Typography > Already Registered ?
                        <Link to="/" >
                            Sign In 
                    </Link>
                </Typography>
            </Paper>
        </Grid>
        <Footer />
        </div>
    )
}
