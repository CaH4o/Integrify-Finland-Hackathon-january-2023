import React from 'react';
import Header from "../Header/Header";
import {Outlet} from "react-router-dom";

import { Box } from '@mui/material';
import Auth from '../../pages/Auth/Auth';

const AppContent = () => {
    // const authenticated = useSelector((state: RootState) => state.user.authentication)
    const authenticated = true;
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