import { Box } from '@mui/material'
import React from 'react'
import SignIn from '../components/SignIn/SignIn'
import SignUp from '../components/SignUp/SignUp'

const Auth = () => {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", ml: "200px"}}>
    <SignIn />
    <SignUp />
    </Box>
  )
}

export default Auth