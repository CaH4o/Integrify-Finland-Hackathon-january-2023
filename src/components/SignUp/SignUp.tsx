import { Box } from "@mui/material"

import "./SignUp.scss"
import { MouseEventHandler } from "react";

type SignUpProps = {
  showSignIn: MouseEventHandler<HTMLParagraphElement>,
  signUp: boolean,
}

const SignUp = ({showSignIn, signUp}: SignUpProps) => {
  return (
    <Box className="signup" sx={{ display: signUp ? "flex" : "none"}}>
        <h1 className="signup__heading">SIGN UP</h1>
        <input type={"email"} className="singup__email" placeholder="Email"/>
        <input type={"password"} className="signup__password" placeholder="Password"/>
        <input type={"password"} className="signup__password" placeholder="Confirm Password"/>
        <button className="signup__btn">SIGN UP</button>
        <p className="already" onClick={showSignIn}>Already have an account?</p>
    </Box>
  )
}

export default SignUp