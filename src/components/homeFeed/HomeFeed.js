import React, { useEffect, useState } from 'react'
import firebase from 'firebase/compat/app';
import './HomeFeed.css';
import Avatar from '@mui/material/Avatar';
import PhotoIcon from '@mui/icons-material/Photo';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import EventNoteIcon from '@mui/icons-material/EventNote';
import AssignmentIcon from '@mui/icons-material/Assignment';
import InputOption from './InputOption';
import Post from './posts/Post';
import { database } from '../../Firebase/firebase';
import { selectUser } from '../../features/userSlice';
import { useSelector } from 'react-redux';
import FlipMove from 'react-flip-move';

function HomeFeed() {
  const user = useSelector(selectUser);
  const [posts, setPosts] = useState([]); /* Maintaining a state of all posts */ 
  const [inputText, setInputText] = useState('');


  /* Accessing the 'posts' collection inside of the database.
    Getting a Real Time Snapshot of the 'posts' Collection.
    We update the 'posts' state everytime some changes happen in the 'posts' collection.
    We access all the 'docs' inside of the Collection
    Then, we iterate through all the docs and we return an Object having an ID and the Data of the Posts.
     */


  useEffect(() => {
    database.collection('posts')
    .orderBy('timeStamp', 'desc')
    .onSnapshot(snap => (
      setPosts(
        snap.docs.map( (doc) => (
          {
            id: doc.id,
            data: doc.data()
          }
        ))
      )
    ))
  }, []);

  const addPost = (e) => {
    e.preventDefault(); /* Stops Refreshing After Submitting the Form i.e., prevents the default behaviour */
    
    /* The post will be pushed to the database upon hitting Enter, thus calling addPost function */
    database.collection('posts').add({
      userName: user.displayName,
      profilePicture: user.photoURL,
      userDescription: 'Coder, Developer, Musician, Teacher.',
      /* A state for the input text is defined which takes care of the post caption */
      postMessage: inputText,
      postImageURL: 'https://cdn.custom-cursor.com/cursors/rock_bongo_cat_947.png',
      timeStamp: firebase.firestore.FieldValue.serverTimestamp()
    });

    setInputText('');

  };

  return (
    <div className='homeFeed'>
        <div className="homeFeed__inputArea">
          <div className="homeFeed__avatarText">
          <Avatar className='homeFeed__avatar' src={user.photoURL} sx={{width: '3.15vw', height: '3.15vw'}}/>
              <div className="homeFeed__inputText">
                  <form>
                      {/* Getting the value of the text from e.target.value and setting the value to the current input text state. */}
                      <input type="text" onChange={(e) => setInputText(e.target.value)} value={inputText}/>
                      <button type='submit' onClick={addPost}></button>
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

        {/* {Flip Move animation library to pop messages as sliding animation to the screen} */}
        <FlipMove> 
        {posts.map((post) => ( /* Rendering Every Post while looping through the posts */
          <Post 
            key={post.id}
            userName={post.data.userName}
            profilePicture={post.data.profilePicture}
            userDescription={post.data.userDescription}
            postMessage={post.data.postMessage}
            postImageURL={post.data.postImageURL}
          />
        ))}
        </FlipMove>
    </div>
  )
}

export default HomeFeed