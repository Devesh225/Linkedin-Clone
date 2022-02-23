import React from 'react'
import './GroupEventDisplay.css';

function GroupEventDisplay({ DisplayIcon, title }) {
  return (
    <div className='groupEventDisplay'>
        <DisplayIcon sx={{height: '1.75vw', width: '1.75vw'}}/>
        <p>{title}</p>
    </div>
  )
}

export default GroupEventDisplay;