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
<<<<<<< HEAD:client/src/pages/Auth/Auth.tsx
    <div className="area" >
        <Box className='modal-login'>
            <SignIn showSignUp={showSignUp} showForgotPassword={showForgotPassword} signIn={signIn}/>
        </Box>
        <Box className='modal-login'>
            <SignUp showSignIn={showSignIn} signUp={signUp}/>
        </Box>
        <Box className='modal-login'>
=======
    <>
        <Box sx={{ display: "flex", justifyContent: "center", mt: 20}}>
            <SignIn showSignUp={showSignUp} showForgotPassword={showForgotPassword} signIn={signIn}/>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "center", mt: 20}}>
            <SignUp showSignIn={showSignIn} signUp={signUp}/>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "center", mt: 20}}>
>>>>>>> cbffd26f0e0eab402f1257b185a718147398387d:client/src/pages/Auth.tsx
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
    </div>
  )
}

export default Auth