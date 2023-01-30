import React from 'react';
import Header from "../Header/Header";
import {Outlet} from "react-router-dom";
import { redirect } from "react-router-dom";

const AppContent = () => {
    const authenticated = true;
    return(
            <>
                <Header/>
                {authenticated ? <Outlet/> : redirect('/login')}
            </>
    )
}

export default AppContent;