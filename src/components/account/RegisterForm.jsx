import React , { useState , useEffect } from 'react'
import { Grid, Paper, Avatar, Typography, TextField, Button } from '@material-ui/core'
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import { Header } from '../pages/Header'
import { Footer } from '../pages/Footer'
import { Link, useHistory } from 'react-router-dom'
import axios from 'axios';

export const RegisterForm = () => {
    const history = useHistory()

    useEffect(() => {
        localStorage.getItem('refresh') && history.push('/main')

    } , [])
    
    const [details, setDetails] = useState({
        username : '',
        email : '',
        password : '',
        confirmpassword : ''
    })
    
    const [error, setError] = useState("")

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
        console.log(details)
        const register_details = { 
            username : details.username, 
            email : details.email,
            password : details.password

        };
        
        if(details.password === details.confirmpassword){
            axios.post(`http://127.0.0.1:8000/api/accounts/register/`, register_details)
            .then(() => history.goBack())
            .catch(setError("Something went wrong!"),(err)=>console.log(err))
        }else{
            ((details.password).length < 6) ? setError("Password must be at least 6 characters long!") :
                                              setError("Passwords do not match!"); 
        }

    }

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
                    {(error !== "") && ( <div style={{color : 'red'}}>{error}</div>)}    
                    <TextField fullWidth style={{margin :'10px 0'}} label='Name'
                    name='username'
                    value={details.username} 
                    onChange={handleChange}
                    placeholder="Enter your name" />

                    <TextField fullWidth style={{margin :'10px 0'}} label='Email' 
                    name='email'
                    value={details.email} 
                    onChange={handleChange}
                    placeholder="Enter your email" />

                    <TextField fullWidth style={{margin :'10px 0'}} label='Password' 
                    name='password'
                    type='password' 
                    value={details.password} 
                    onChange={handleChange}
                    placeholder="Enter your password"/>

                    <TextField fullWidth style={{margin :'10px 0'}} label='Confirm Password' 
                    name='confirmpassword'
                    type='password' 
                    value={details.confirmpassword} 
                    onChange={handleChange}

                    placeholder="Confirm your password"/>
                    
                    <Button type='submit' onClick={submitHandler} style={btnstyle} variant='contained' color='primary'>
                        Sign up
                    </Button>
                

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
