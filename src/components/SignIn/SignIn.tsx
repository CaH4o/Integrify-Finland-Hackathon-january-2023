import { Box, Icon, IconButton } from "@mui/material"
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import "./SignIn.scss"

const SignIn = () => {
  return (
    <Box className="signIn">
        <h1 className="signIn__heading">LOG IN</h1>
        <input type={"email"} className="singIn__email" placeholder="Email"/>
        <input type={"password"} className="signIn__password" placeholder="Password"/>
        <div className="rememberMe">
        <input type="checkbox" name="remember me" id="remember" />
        <label htmlFor="remember">Remember me</label>
        </div>
        <button className="login__btn">LOG IN</button>
        <p className="forgot">Forgot password?</p>
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

    </Box>
  )
}

export default SignIn