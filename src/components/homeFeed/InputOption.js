import React from 'react'
import './InputOption.css';


function inputOption({ Icon, title, color }) {
  return (
    <div className='inputOption'>
        <Icon style={{color: color}} sx={{height: '2.1vw', width: '2.1vw'}} />
        <h2>{title}</h2>
    </div>
  )
}

export default inputOption