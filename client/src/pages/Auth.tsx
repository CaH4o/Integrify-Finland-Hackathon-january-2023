import { Box } from '@mui/material'
import React, { useState } from 'react'
import ForgotPassword from '../ForgotPassword/ForgotPassword'
import SignIn from "../components/SignIn/SignIn";
import SignUp from "../components/SignUp/SignUp";

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
    <>
        <Box sx={{ display: "flex", justifyContent: "center", mt: 20}}>
            <SignIn showSignUp={showSignUp} showForgotPassword={showForgotPassword} signIn={signIn}/>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "center", mt: 20}}>
            <SignUp showSignIn={showSignIn} signUp={signUp}/>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "center", mt: 20}}>
            <ForgotPassword showSignIn={showSignIn} forgotPassword={forgotPassword}/>
        </Box>
    </>
  )
}

export default Auth