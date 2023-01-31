import React from 'react';
import Header from "../Header/Header";
import {Outlet} from "react-router-dom";
import { redirect } from "react-router-dom";
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { Box } from '@mui/material';
import Auth from '../../pages/Auth/Auth';

const AppContent = () => {
    const authenticated = useSelector((state: RootState) => state.user.authentication)
    
    return(
            <>
                {authenticated ? <Box>
                    <Header/>
                    <Outlet/>
                    </Box> : <Auth />}
            </>
    )
}

export default AppContent;