import './header.scss';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import SyncIcon from '@mui/icons-material/Sync';
import CloudQueueIcon from '@mui/icons-material/CloudQueue';
import React from 'react';
import {NavLink} from "react-router-dom";
import { logOut } from '../../redux/slices/userReducer';
import { useDispatch } from 'react-redux';
import GithubIssues from '../GithubIssues/GithubIssues';


const Header = () => {

    const dispatch = useDispatch();

    return (
        <div className='header'>
            <div className="header-content">
                <img src="./photo-1438761681033-6461ffad8d80.jpg" alt="avatar"/>
                <nav className="header-content_navbar">
                  <GithubIssues/>
                    <button className='header-content_navbar-item header-content_navbar-btn'>
                        <CloudQueueIcon/>
                        <h4>Connect<br/>Slack</h4>
                    </button>
                    <NavLink to={'/'} className="header-content_navbar-item header-content_navbar-btn">
                        <AssignmentTurnedInIcon/>
                        <h4>Workspace</h4>
                    </NavLink>
                    <NavLink to={"/settings"} className="header-content_navbar-item">
                        <AccountCircleIcon/>
                        <h4>Settings</h4>
                    </NavLink>
                    <NavLink to={"/login"} className="header-content_navbar-item">
                        <LogoutIcon onClick={() => dispatch(logOut())}/>
                        <h4>Logout</h4>
                    </NavLink>
                </nav>
            </div>
        </div>
    )
}

export default Header;