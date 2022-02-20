import React from 'react'
import './HomeFeed.css';
import Avatar from '@mui/material/Avatar';
import PhotoIcon from '@mui/icons-material/Photo';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import EventNoteIcon from '@mui/icons-material/EventNote';
import AssignmentIcon from '@mui/icons-material/Assignment';
import InputOption from './InputOption';
import Post from './posts/Post';

function HomeFeed() {
  return (
    <div className='homeFeed'>
        <div className="homeFeed__inputArea">
          <div className="homeFeed__avatarText">
          <Avatar className='homeFeed__avatar' src='https://pbs.twimg.com/profile_images/1484824719689846785/6AsOegSZ_400x400.jpg' sx={{width: '3rem', height: '3rem'}}/>
              <div className="homeFeed__inputText">
                  <form>
                      <input type="text"/>
                      <button type='submit'>Submit</button>
                  </form>
              </div>
          </div>
            <div className="homeFeed__inputOptions">
              <InputOption Icon={PhotoIcon} title='Photo' color='#0a66c2'/>
              <InputOption Icon={OndemandVideoIcon} title='Video' color='#7fc15e'/>
              <InputOption Icon={EventNoteIcon} title='Event' color='#e7a33e'/>
              <InputOption Icon={AssignmentIcon} title='Write article' color='#fc9295'/>
            </div>
        </div>
        <Post userName='Devesh Tulshyan' userDescription='Coder, Developer, Musician, Teacher.' timeSincePosted='2hr ago' postMessage='Rock Cat Band' postImageURL='https://cdn.custom-cursor.com/cursors/rock_bongo_cat_947.png' />
    </div>
  )
}

export default HomeFeed