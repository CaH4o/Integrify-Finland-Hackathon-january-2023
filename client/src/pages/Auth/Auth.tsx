import { Box } from '@mui/material'
import './_auth.scss';
import React, { useState } from 'react'
import ForgotPassword from '../../ForgotPassword/ForgotPassword'
import SignIn from "../../components/SignIn/SignIn";
import SignUp from "../../components/SignUp/SignUp";

const Auth = () => {
    const [signIn, setSignIn] = useState<boolean>(true);
    const [signUp, setSignUp] = useState<boolean>(false);
    const [forgotPassword, setForgotPassword] = useState<boolean>(false);
    
    const showSignIn = () => {
        setSignIn(true);
        setSignUp(false);
        setForgotPassword(false);
    }

    const showSignUp = () => {
        setSignIn(false);
        setSignUp(true);
        setForgotPassword(false);
    }

    const showForgotPassword = () => {
        setSignIn(false);
        setSignUp(false);
        setForgotPassword(true);
    }
  return (
    <div className="area" >
        <Box className='modal-login'>
            <SignIn showSignUp={showSignUp} showForgotPassword={showForgotPassword} signIn={signIn}/>
        </Box>
        <Box className='modal-login'>
            <SignUp showSignIn={showSignIn} signUp={signUp}/>
        </Box>
        <Box className='modal-login'>
            <ForgotPassword showSignIn={showSignIn} forgotPassword={forgotPassword}/>
        </Box>
        <ul className="circles">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
    </div>)
}

export default Auth