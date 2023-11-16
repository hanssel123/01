import React from 'react'
import "./Header.css"


function Header ({user}){
  const {name, status, avatar} = user;
  return (
    <div className='profile-header-container'>
    <div className='profile-h'>
      <div className="profile-avatar-h">
        <img src={avatar}/>
      </div>
      <div className='profile-info-h'>
        <div className="profile-name-h">
          {name}
        </div>
        <div className="profile-status-h">
          {status}
        </div>
      </div>
      </div>
    </div>
  );
}

export default Header

