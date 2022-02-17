import React from 'react'
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import HeaderItem from './HeaderItem';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import WorkIcon from '@mui/icons-material/Work';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AppsIcon from '@mui/icons-material/Apps';




function Header() {
  return (
    <div className="header">
      <div className="header__first"> {/*First Part of Header containing Icon and Search Bar*/}
        <img src="https://cdn-icons.flaticon.com/png/512/3536/premium/3536505.png?token=exp=1645104100~hmac=bbb365c2aca80ced4f9f68e2a672b0c2" alt="" />
        <div className="header__search">
          <SearchIcon />
          <input type="text" />
        </div>
      </div>
      <div className="header__second"> {/*Second Part of Header containing Options and Profile*/}
        <HeaderItem Icon={HomeIcon} title='Home' />
        <HeaderItem Icon={SupervisorAccountIcon} title='My Network' />
        <HeaderItem Icon={WorkIcon} title='Jobs' />
        <HeaderItem Icon={ChatBubbleIcon} title='Messaging' />
        <HeaderItem Icon={NotificationsIcon} title='Notifications' />
        <HeaderItem avatarURL='https://pbs.twimg.com/profile_images/1484824719689846785/6AsOegSZ_400x400.jpg' title='Me ▼' />
        <HeaderItem Icon={AppsIcon} title='Work ▼' />
      </div>
    </div>
  )
}

export default Header;