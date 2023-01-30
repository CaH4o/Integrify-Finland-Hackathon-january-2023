import React, { MouseEventHandler, useState } from 'react';
import { Box } from '@mui/material';
import './SignUp.scss';
import axios from 'axios';

type SignUpProps = {
  showSignIn: MouseEventHandler<HTMLParagraphElement>;
  signUp: boolean;
};



const SignUp = ({ showSignIn, signUp }: SignUpProps) => {
  // form field states
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [confirmPassword, setConfirmPassword] = useState('');

// form handlers
const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  setEmail(event.target.value);
};

const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  setPassword(event.target.value);
};

const handleConfirmPasswordChange = (
  event: React.ChangeEvent<HTMLInputElement>
) => {
  setConfirmPassword(event.target.value);
};

const handleSubmit = async (event: React.SyntheticEvent) => {
  event.preventDefault();
  const response = await axios.post(
    'http://localhost:4000/api/v1/users/register',
    { email, password }
  );
  console.log(response);
};
  return (
    <Box className="signup" sx={{ display: signUp ? 'flex' : 'none' }}>
      <h1 className="signup__heading">SIGN UP</h1>
        <input
          name="email"
          type={'email'}
          className="singup__email"
          placeholder="Email"
          onChange={handleEmailChange}
        />
        <input
          name="password"
          type={'password'}
          className="signup__password"
          placeholder="Password"
          onChange={handlePasswordChange}
        />
        <input
          name="confirmPassword"
          type={'password'}
          className="signup__password"
          placeholder="Confirm Password"
          onChange={handleConfirmPasswordChange}
        />
        <button className="signup__btn" onClick={handleSubmit}>
          SIGN UP
        </button>
      <p className="already" onClick={showSignIn}>
        Already have an account?
      </p>
    </Box>
  );
};

export default SignUp;
