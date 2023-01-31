import { Box } from '@mui/material'
import './_auth.scss';
import React, { useEffect, useState } from 'react'
import ForgotPassword from '../../ForgotPassword/ForgotPassword'
import SignIn from "../../components/SignIn/SignIn";
import SignUp from "../../components/SignUp/SignUp";
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

const Auth = () => {
    const [signIn, setSignIn] = useState<boolean>(true);
    const [signUp, setSignUp] = useState<boolean>(false);
    const [forgotPassword, setForgotPassword] = useState<boolean>(false);
    
    const authenticated = useSelector((state: RootState) => state.user.authentication)
    
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

    useEffect(() => {
        console.log(authenticated)
    }, [showSignIn, showSignUp, showForgotPassword])
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