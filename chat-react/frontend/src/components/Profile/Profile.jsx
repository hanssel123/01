import React from 'react';
import './Profile.css';

function Profile({ user }) {
  const {name, status, avatar, handledClick} = user;
  return (
    <div className='profile-container'>
    <div className='profile'>
      <div className="profile-avatar" onClick={() => handledClick()}>
        <img src={avatar}/>
      </div>
      <div className='profile-info'>
        <div className="profile-name">
          {name}
        </div>
        <div className="profile-status">
          {status}
        </div>
      </div>
      </div>
    </div>
  );
}

export default Profile;
