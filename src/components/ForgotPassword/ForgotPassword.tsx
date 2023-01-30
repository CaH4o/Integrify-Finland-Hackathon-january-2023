import { Box, Icon, IconButton } from "@mui/material"
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import "./ForgotPassword.scss"

const ForgotPassword = () => {
  return (
    <Box className="forgotPassword">
        <h1 className="forgotPassword__heading">{`FORGOT \r\n PASSWORD`}</h1>
        <input type={"email"} className="forgotPassword__email" placeholder="Email"/>
        <button className="forgotPassword__btn">RESET PASSWORD</button>
        <p className="remember">Remember password? Log in!</p>
    </Box>
  )
}

export default ForgotPassword;