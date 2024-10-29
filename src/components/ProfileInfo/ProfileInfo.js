import React, { Component } from 'react';
import './ProfileInfo.css';

class ProfileInfo extends Component {
  render() {
    return (
      <>
        <div className='profile-info-content'>
            <div className='line'><span>Games Downloaded</span><span>3</span></div>
            <div className='line'><span>Friends Online</span><span>16</span></div>
            <div className='line'><span>Live Streams</span><span>None</span></div>
            <div className='line'><span>Clips</span><span>29</span></div>
        </div>
      </>
    );
  }
}

export default ProfileInfo;