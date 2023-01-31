import { Box, Icon, IconButton } from "@mui/material"
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import "./SignIn.scss"
import { MouseEventHandler, useState } from "react";
import React from 'react';
import axios from 'axios';

type SignInProps = {
  showSignUp: MouseEventHandler,
  showForgotPassword: MouseEventHandler<HTMLParagraphElement>,
  signIn: boolean;
}
const SignIn = ({showSignUp, showForgotPassword, signIn} : SignInProps) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const emailChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  }

  const passwordChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  }

  const submitHandler = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    const response = await axios.post(
      'http://localhost:4000/api/v1/users/login',
      { email, password }
    );
  }

  return (
    <Box className="signIn" sx={{ display: signIn ? "flex" : "none"}}>
        <h1 className="signIn__heading">LOG IN</h1>
        <input type={"email"} className="signIn__email" placeholder="Email" onChange={emailChangeHandler} name='email'/>
        <input type={"password"} className="signIn__password" placeholder="Password" onChange={passwordChangeHandler} name='password'/>
        <div className="rememberMe">
            <input type="checkbox" name="remember me" id="remember" />
            <label htmlFor="remember">Remember me</label>
        </div>
        <button className="login__btn" onClick={submitHandler}>LOG IN</button>
        <p className="forgot" onClick={showForgotPassword}>Forgot password?</p>
        <p className="or"><span>OR</span></p>
        <Box className="links">
        <IconButton disableRipple>
          <LinkedInIcon className="link"/>
        </IconButton>
        <IconButton disableRipple>
          <FacebookIcon className="link"/>
        </IconButton>
        <IconButton disableRipple onClick={showSignUp}>
          <LockOpenIcon className="link" />
        </IconButton>
        </Box>
    </Box>
  )
}
export default SignIn