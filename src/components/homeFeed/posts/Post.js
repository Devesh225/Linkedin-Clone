import React from 'react'
import './Post.css'
import Avatar from '@mui/material/Avatar';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import InputOption from './../InputOption';
import InsertCommentOutlinedIcon from '@mui/icons-material/InsertCommentOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';


function Post({ userName, userDescription, timeSincePosted, postMessage, postImageURL }) {
  return (
    <div className='post'>
      <div className="post__header">
      <Avatar className='post__avatar' src='https://pbs.twimg.com/profile_images/1484824719689846785/6AsOegSZ_400x400.jpg' sx={{width: '3rem', height: '3rem'}}/>
      <div className="post__headerInfo">
        <h2>{userName}</h2>
        <p>{userDescription}</p>
        <p>{timeSincePosted}</p>
      </div>
      </div>
      <div className="post__body">
        <p>{postMessage}</p>
        <img src={postImageURL} alt="Post Image" />
      </div>
      <div className="post__reactButtons">
        <InputOption Icon={ThumbUpOutlinedIcon} title='Like' color='rgba(0, 0, 0, 0.6)' />
        <InputOption Icon={InsertCommentOutlinedIcon} title='Comment' color='rgba(0, 0, 0, 0.6)' />
        <InputOption Icon={ShareOutlinedIcon} title='Share' color='rgba(0, 0, 0, 0.6)' />
        <InputOption Icon={SendOutlinedIcon} title='Send' color='rgba(0, 0, 0, 0.6)' />
      </div>
    </div>
  )
}

export default Post