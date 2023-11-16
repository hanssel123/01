import React from 'react';
import './ProfileCard.css';

function ProfileCard({ user }) {
  const {name, status, avatar, handledClick} = user;
  return (
    <div className='profile-card-container'>
    <div className='profile-card'>
      <div className="profile-card-avatar" onClick={() => handledClick()}>
        <img src={avatar}/>
      </div>
      <div className='profile-card-info'>
        <div className="profile-card-name">
          {name}
        </div>
        <div className="profile-card-status">
          {status}
        </div>
      </div>
      </div>
    </div>
  );
}

export default ProfileCard;
