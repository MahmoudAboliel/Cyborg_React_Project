import React, { Component } from 'react';
import './ProfileState.css';
import { SecondaryButton } from '../index';

class ProfileState extends Component {
  render() {
    return (
      <>
        <div className='profile-state-content'>
            <span className='state'>offline</span>
            <h2>Alan Smithee</h2>
            <p>You Haven't Gone Live yet. Go Live By Touching The Button Below.</p>
            <SecondaryButton url="/#">Start Live Stream</SecondaryButton>
        </div>
      </>
    );
  }
}

export default ProfileState;