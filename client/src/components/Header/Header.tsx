import './header.scss';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';

const Header = () => {
    return (
        <div className='header'>
            <div className="header-content">
                <img src="./photo-1438761681033-6461ffad8d80.jpg" alt="avatar"/>
                <nav className="header-content_navbar">
                    <a href="client/src/components/Header#" className="header-content_navbar-item">
                        <AssignmentTurnedInIcon/>
                        <h4>Workspace</h4>
                    </a>
                    <a href="client/src/components/Header#" className="header-content_navbar-item">
                        <AccountCircleIcon/>
                        <h4>Account</h4>
                    </a>
                    <a href="client/src/components/Header#" className="header-content_navbar-item">
                        <LogoutIcon/>
                        <h4>Logout</h4>
                    </a>
                </nav>
            </div>
        </div>
    )
}

export default Header;