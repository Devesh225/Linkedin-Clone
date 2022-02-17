import React from 'react'
import './HeaderItem.css';
import Avatar from '@mui/material/Avatar';

function HeaderItem({ avatarURL, Icon, title }) { /*Object Destructuring of props */
  return (
    <div className='headerItem'>
        {Icon && <Icon className='headerItem__icon'/>}
        { avatarURL && <Avatar className='headerItem__icon' src={avatarURL} /> }
        <h4 className='headerItem__title'>{title}</h4>
    </div>
  )
}

export default HeaderItem;