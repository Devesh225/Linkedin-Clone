import React from 'react'
import './WidgetArticle.css';
import CircleIcon from '@mui/icons-material/Circle';

function WidgetArticle( {title, time, readers} ) {
  return (
    <div className='widgetArticle'>
      <div className="widgetArticle__top">
        <CircleIcon sx={{height: '0.55vw', width: '0.55vw'}} />
        <h2>{title}</h2>
      </div>
      <div className="widgetArticle__bottom">
        <p className='widgetArticle__time'>{time}</p>
        <CircleIcon sx={{height: '0.4vw', width: '0.4vw'}} />
        <p className='widgetArticle__readers'>{readers} readers</p>
      </div>
    </div>
  )
}

export default WidgetArticle;
