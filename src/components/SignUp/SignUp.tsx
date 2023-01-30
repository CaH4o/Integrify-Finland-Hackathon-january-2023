import { Box, IconButton } from "@mui/material"
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import "./SignUp.scss"

const SignUp = () => {
  return (
    <div className="signup">
        <h1 className="signup__heading">Sign Up</h1>
        <input type={"email"} className="singup__email" placeholder="Email"/>
        <input type={"password"} className="signup__password" placeholder="Password"/>
        <input type={"password"} className="signup__password" placeholder="Confirm Password"/>
        <button className="signup__btn">Sign Up</button>
        <p className="already">Already have an account?</p>
        <p className="or"><span>OR</span></p>
        <Box className="links">
        <IconButton disableRipple>
          <LinkedInIcon className="link"/>
        </IconButton>
        <IconButton disableRipple>
          <FacebookIcon className="link"/>
        </IconButton>
        <IconButton disableRipple>
          <LockOpenIcon className="link"/>
        </IconButton>
        </Box>

    </div>
  )
}

export default SignUp