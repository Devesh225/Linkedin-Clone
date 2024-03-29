import React from 'react'
import './HomeSidebar.css';
import Avatar from '@mui/material/Avatar';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import GroupsIcon from '@mui/icons-material/Groups';
import DateRangeIcon from '@mui/icons-material/DateRange';
import GroupEventDisplay from './GroupEventDisplay';
import TagIcon from '@mui/icons-material/Tag';
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/userSlice';

function HomeSidebar() {
  const user = useSelector(selectUser);
  return (
    <div className='homeSidebar'>
      <div className="homeSidebar__top">
        <img src="https://wallpaperaccess.com/full/2068772.jpg" alt=""/>
        <Avatar className='homeSidebar__avatar' src={user.photoURL} sx={{width: '5.15vw', height: '5.15vw'}}/>
        <h2>{user.displayName}</h2>
        <p>Coder, Developer, Musician, Teacher.</p>
      </div>
      <div className="homeSidebar__stats">
          <div className="homeSidebar__statBlock">
            <p>Who viewed your profile</p>
            <p className='homeSidebar__statValue'>48</p>
          </div>
          <div className="homeSidebar__statBlock">
            <p>Views of your post</p>
            <p className='homeSidebar__statValue'>178</p>
          </div>
      </div>
      <div className='homeSidebar__bookmark'>
          <BookmarkIcon fontSize='small' opacity='0.7' sx={{height: '1.75vw', width: '1.75vw'}}/> 
          <p>My items</p>
      </div>

      <div className="homeSidebar__bottom">
        <div className="homeSidebar__recent">
          <p>Recent</p>
          <GroupEventDisplay DisplayIcon={GroupsIcon} title='ReactJS Developers'/>
          <GroupEventDisplay DisplayIcon={DateRangeIcon} title='React Demo Event'/>
          <GroupEventDisplay DisplayIcon={DateRangeIcon} title='How to make a Website'/>
          <GroupEventDisplay DisplayIcon={GroupsIcon} title='Web Developer Community'/>
          <GroupEventDisplay DisplayIcon={DateRangeIcon} title='Deploy a ReactJS Website'/>
        </div>
        <div className="homeSidebar__groupEventHashtag">
          <p>Groups</p>
          <GroupEventDisplay DisplayIcon={GroupsIcon} title='ReactJS Developers'/>
          <GroupEventDisplay DisplayIcon={GroupsIcon} title='Web Developer Community'/>
          <GroupEventDisplay DisplayIcon={GroupsIcon} title='Startup Specialists'/>
        </div>
        <div className="homeSidebar__groupEventHashtag">
          <p>Events</p>
          <GroupEventDisplay DisplayIcon={DateRangeIcon} title='React Demo Event'/>
          <GroupEventDisplay DisplayIcon={DateRangeIcon} title='How to make a Website'/>
          <GroupEventDisplay DisplayIcon={DateRangeIcon} title='Deploy a ReactJS Website'/>
        </div>
        <div className="homeSidebar__groupEventHashtag">
          <p>Followed Hastags</p>
          <GroupEventDisplay DisplayIcon={TagIcon} title='developer'/>
          <GroupEventDisplay DisplayIcon={TagIcon} title='reactjs'/>
          <GroupEventDisplay DisplayIcon={TagIcon} title='websites'/>
        </div>
      </div>
    </div>
  )
}

export default HomeSidebar