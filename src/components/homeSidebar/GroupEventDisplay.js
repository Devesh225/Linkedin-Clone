import React from 'react'
import './GroupEventDisplay.css';

function GroupEventDisplay({ DisplayIcon, title }) {
  return (
    <div className='groupEventDisplay'>
        <DisplayIcon />
        <p>{title}</p>
    </div>
  )
}

export default GroupEventDisplay;