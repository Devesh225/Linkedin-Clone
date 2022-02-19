import React from 'react'
import './InputOption.css';


function inputOption({ Icon, title, color }) {
  return (
    <div className='inputOption'>
        <Icon style={{color: color}} />
        <h2>{title}</h2>
    </div>
  )
}

export default inputOption