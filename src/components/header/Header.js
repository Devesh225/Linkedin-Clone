import React from 'react'
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import HeaderItem from './HeaderItem';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import WorkIcon from '@mui/icons-material/Work';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import NotificationsIcon from '@mui/icons-material/Notifications';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import AppsIcon from '@mui/icons-material/Apps';
import LogoutIcon from '@mui/icons-material/Logout';
import { useDispatch, useSelector } from 'react-redux';
import { auth } from '../../Firebase/firebase';
import { logout, selectUser } from '../../features/userSlice';

function Header() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  
  const logoutFromApp = () => {
    dispatch(logout()); /* Logout from Redux */
    auth.signOut(); /* Logout from Firebase */
  }

  return (
    <div className="header">
      <div className="header__first"> {/*First Part of Header containing Icon and Search Bar*/}
        <LinkedInIcon sx={{height: '2.65vw', width: '2.65vw', color: '#0a66c2'}}/>
        <div className="header__search">
          <SearchIcon sx={{height: '1.75vw', width: '1.75vw'}}/>
          <input placeholder='Search' type="text" />
        </div>
      </div>
      <div className="header__second"> {/*Second Part of Header containing Options and Profile*/}
        <HeaderItem Icon={HomeIcon} title='Home' />
        <HeaderItem Icon={SupervisorAccountIcon} title='My Network' />
        <HeaderItem Icon={WorkIcon} title='Jobs' />
        <HeaderItem Icon={ChatBubbleIcon} title='Messaging' />
        <HeaderItem Icon={NotificationsIcon} title='Notifications' />
        <HeaderItem avatarURL={user.photoURL} title='Me ▼' />
        <HeaderItem Icon={AppsIcon} title='Work ▼' />
        <HeaderItem Icon={LogoutIcon} title='Logout' onClick={logoutFromApp} />
      </div>
    </div>
  )
}

export default Header;