import React, {forwardRef} from 'react'
import './Post.css'
import Avatar from '@mui/material/Avatar';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import InputOption from './../InputOption';
import InsertCommentOutlinedIcon from '@mui/icons-material/InsertCommentOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';

const Post = forwardRef(({ userName, profilePicture, userDescription, postMessage, postImageURL }, ref) => {
  return (
    <div className='post' ref={ref}>
      <div className="post__header">
      <Avatar className='post__avatar' src={profilePicture} sx={{width: '3.17vw', height: '3.17vw'}}/>
      <div className="post__headerInfo">
        <h2>{userName}</h2>
        <p>{userDescription}</p>
      </div>
      </div>
      <div className="post__body">
        <p>{postMessage}</p>
        <img src={postImageURL} alt="Post" className='post__image' />
      </div>
      <div className="post__reactButtons">
        <InputOption Icon={ThumbUpOutlinedIcon} title='Like' color='rgba(0, 0, 0, 0.6)' />
        <InputOption Icon={InsertCommentOutlinedIcon} title='Comment' color='rgba(0, 0, 0, 0.6)' />
        <InputOption Icon={ShareOutlinedIcon} title='Share' color='rgba(0, 0, 0, 0.6)' />
        <InputOption Icon={SendOutlinedIcon} title='Send' color='rgba(0, 0, 0, 0.6)' />
      </div>
    </div>
  )
});

export default Post