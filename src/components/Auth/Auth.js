import React, { Profiler, useState } from 'react'
import { Avatar, Button, Paper, Grid, Typography, Container } from '@material-ui/core';
import { GoogleLogin, GoogleOAuthProvider, googleLogout } from '@react-oauth/google';
import { useDispatch } from 'react-redux';
import LockOutLinedIcon from '@material-ui/icons/LockOpenOutlined';
import useStyles from './styles';

import IconforAuth from './IconforAuth';
import InputforAuth from './InputforAuth';
const Auth = () => {
    const classes = useStyles();
    const [showpassword, setShowPassword] = useState(false);
    const [isSignup, setIsSignUp] = useState(false);
    const handleShowPassword = () => setShowPassword((prevShowPassword) => !prevShowPassword)
    const dispatch = useDispatch();

    const handleSubmit = () => {

    };

    const handleChange = () => {

    };

    const switchMode = () => {
        setIsSignUp((prevIsSignUp) => !prevIsSignUp);
        handleShowPassword(false);
    }

    const googleSuccess = async (res) => {
        console.log(res);
        const result = res?.profileObj;
        const token = res?.tokenId;

        try {
            dispatch({ type: 'AUTH', data: { result, token } });
        } catch (error) {
            console.log(error);
        }

    }

    const googleFailure= (error) => {
        console.log(error);
        console.log('Login Failed');
        console.log('Google sign In was unsuccessful. Try again later');
    }

    return (
        <Container component="main" maxWidth="xs" >
            <Paper className={classes.paper} elevation={3}>
                <Avatar className={classes.avatar} >
                    <LockOutLinedIcon />
                </Avatar>
                <Typography variant='h5'>{isSignup ? 'Sign Up' : 'Sign In'}</Typography>
                <form className={classes.form} onSubmit={handleSubmit} >
                    <Grid container spacing={2}> 
                        {
                            isSignup &&  (
                                <>
                                    <InputforAuth name='firstName' label='First Name' handleChange={handleChange} autoFocus half />
                                    <InputforAuth name='firstName' label='Last Name' handleChange={handleChange} half />
                                </>
                            )
                        }
                        <InputforAuth name='email' label='Email Address' handleChange={handleChange} type='email' ></InputforAuth>
                        <InputforAuth name='password' label='Password' handleChange={handleChange} type={showpassword ? "text" : "password"} handleShowPassword={handleShowPassword}></InputforAuth>
                        { isSignup && <InputforAuth name='confirmPassword' label="Repeat Password" handleChange={handleChange} type='password' /> }
                    </Grid>
                    <Button type='submit' fullWidth variant='contained' color='primary' className={classes.submit} >
                        {isSignup ? 'Sign Up' : 'Sign In'}
                    </Button>
                    <GoogleOAuthProvider clientId="510303594612-m6rmt7pqgjf4q3db1kri68i37r1afd7e.apps.googleusercontent.com" >
                    <GoogleLogin 
                        render={(renderProps) => (
                            <Button 
                                className={classes.googleButton} 
                                color='primary' 
                                fullWidth 
                                onClick={renderProps.onClick} 
                                disabled={renderProps.disabled} 
                                startIcon={<IconforAuth />} 
                                variant='contained' 
                            > 
                                Google Sign In
                            </Button>
                            
                        )}  
                        onSuccess={googleSuccess}
                        onError={googleFailure}
                        cookiePolicy='single_host_origin'
                    />
                    </GoogleOAuthProvider>
                    <Grid container justifyContent='flex-end'>
                        <Grid item>
                            <Button onClick={switchMode}>
                                { isSignup ? "Already have an account? Sign In" : "Don't have an account? Sign Up"}
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Paper>
        </Container>
    )
}

export default Auth