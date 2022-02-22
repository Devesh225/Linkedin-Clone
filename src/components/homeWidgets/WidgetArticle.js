import React from 'react'
import './WidgetArticle.css';
import CircleIcon from '@mui/icons-material/Circle';

function WidgetArticle( {title, time, readers} ) {
  return (
    <div className='widgetArticle'>
      <div className="widgetArticle__top">
        <CircleIcon sx={{height: '0.4rem', width: '0.4rem'}} />
        <h2>{title}</h2>
      </div>
      <div className="widgetArticle__bottom">
        <p className='widgetArticle__time'>{time}</p>
        <CircleIcon sx={{height: '0.25rem', width: '0.25rem'}} />
        <p className='widgetArticle__readers'>{readers} readers</p>
      </div>
    </div>
  )
}

export default WidgetArticle;
