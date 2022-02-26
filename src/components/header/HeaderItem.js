import React from 'react'
import './HeaderItem.css';
import Avatar from '@mui/material/Avatar';

function HeaderItem({ avatarURL, Icon, title, onClick }) { /*Object Destructuring of props */
  return (
    // {WE PASSED THE logoutFromApp function as props here and when we click Logout HeaderItem component, we logout.}
    <div onClick={onClick} className='headerItem'> 
        {Icon && <Icon className='headerItem__icon'/>}
        { avatarURL && <Avatar className='headerItem__icon' src={avatarURL} /> }
        <h4 className='headerItem__title'>{title}</h4>
    </div>
  )
}

export default HeaderItem;