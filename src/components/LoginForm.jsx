import React, {useState} from 'react'
import { Grid,Paper, Avatar, TextField, Button, Typography } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import {Header} from './Header'
import {Footer} from './Footer'
import { Link } from 'react-router-dom'

export const LoginForm = ({Login, error}) => {
    const [details, setDetails] = useState({
        email : '',
        password : ''
    })

    const handleChange = (event) => {
        const {name, value} = event.target;
        setDetails(preDetail => {
            return {
                ...preDetail,
                [name]: value
            };
        });
    }

    const submitHandler = (e) => {
        e.preventDefault();
        Login(details)

    }

    const paperStyle={
        padding :20,
        height:'40vh',
        width:480, 
        margin:"20px auto" 
    }
    const avatarStyle={
        backgroundColor:'#f5ba13'
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
                        <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
                        <h2>Sign In</h2>
                    </Grid>
                    {(error != "") && ( <div>{error}</div>)}
                    <TextField style={{margin :'6px 0'}} label='Email' 
                    name='email'
                    value={details.email} 
                    placeholder='Enter email'
                    onChange={handleChange}
                    fullWidth required/>                    

                    <TextField style={{margin :'10px 0'}} label='Password' 
                    name='password'
                    value={details.password}
                    placeholder='Enter password' 
                    onChange={handleChange}
                    type='password' 
                    fullWidth required/>
                    
                    <Button type='submit' onSubmit={submitHandler} variant="contained" style={btnstyle} fullWidth>Sign in</Button>
                    
                    <Typography > Do you have an account ?
                        <Link to="/register" >
                            Sign Up 
                    </Link>
                    </Typography>
                </Paper>
            </Grid>
            <Footer />
    </div>
    )
}
