import './header.scss';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import React from 'react';
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <div className='header'>
            <div className="header-content">
                <img src="./photo-1438761681033-6461ffad8d80.jpg" alt="avatar"/>
                <nav className="header-content_navbar">
                    <NavLink to={'/'} className="header-content_navbar-item">
                        <AssignmentTurnedInIcon/>
                        <h4>Workspace</h4>
                    </NavLink>
                    <NavLink to={"/settings"} className="header-content_navbar-item">
                        <AccountCircleIcon/>
                        <h4>Settings</h4>
                    </NavLink>
                    <NavLink to={"/logout"} className="header-content_navbar-item">
                        <LogoutIcon/>
                        <h4>Logout</h4>
                    </NavLink>
                </nav>
            </div>
        </div>
    )
}

export default Header;