import React, { Box } from "@mui/material"
import { MouseEventHandler } from "react"


import './ForgotPassword.scss';

type forgotPasswordType = {
  showSignIn: MouseEventHandler<HTMLParagraphElement>;
  forgotPassword: boolean;
};

const ForgotPassword = ({ showSignIn, forgotPassword }: forgotPasswordType) => {
  return (
    <Box
      className="forgotPassword"
      sx={{ display: forgotPassword ? 'flex' : 'none' }}
    >
      <h1 className="forgotPassword__heading">{`FORGOT \r\n PASSWORD`}</h1>
      <input
        type={'email'}
        className="forgotPassword__email"
        placeholder="Email"
      />
      <button className="forgotPassword__btn">RESET PASSWORD</button>
      <p className="remember" onClick={showSignIn}>
        Remember password? Log in!
      </p>
    </Box>
  );
};

export default ForgotPassword;
