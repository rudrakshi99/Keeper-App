import React, {useState} from 'react'
import { Grid,Paper, Avatar, TextField, Button, Typography } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import {Header} from './Header'
import {Footer} from './Footer'
import { Link , useHistory} from 'react-router-dom'
import axios from 'axios';

export const LoginForm = () => {
    const [details, setDetails] = useState({
        email : '',
        password : ''
    })
    
    const [error, setError] = useState("")
    
    const history = useHistory()
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
        const login_details = { 
            email : details.email,
            password : details.password

        };
        console.log("k")
        axios.post(`http://127.0.0.1:8000/api/accounts/login/`, login_details)
            .then((response) => {
            localStorage.setItem("refresh", response.data.tokens.refresh)   
            localStorage.setItem("access", response.data.tokens.access)
            history.push('/main')
        })
            .catch(setError("Please check your details!"),(err)=>console.log(err))
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
                    {(error != "") && ( <div style={{ color : 'red' }}>{error}</div>)}
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
                    
                    <Button type='submit' onClick={submitHandler} variant="contained" style={btnstyle} fullWidth>Sign in</Button>
                    
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
