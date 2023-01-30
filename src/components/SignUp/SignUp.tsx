import { Box, IconButton } from "@mui/material"
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import "./SignUp.scss"

const SignUp = () => {
  return (
    <div className="signup">
        <h1 className="signup__heading">SIGN UP</h1>
        <input type={"email"} className="singup__email" placeholder="Email"/>
        <input type={"password"} className="signup__password" placeholder="Password"/>
        <input type={"password"} className="signup__password" placeholder="Confirm Password"/>
        <button className="signup__btn">SIGN UP</button>
        <p className="already">Already have an account?</p>
    </div>
  )
}

export default SignUp