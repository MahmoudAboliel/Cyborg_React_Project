import React, { Component } from 'react';
import './Profile.css';
import { ProfileMain, GamingLibrary } from '../../sections/index';


class Profile extends Component {
  render() {
    return (
      <>
        <ProfileMain />
        <GamingLibrary />
      </>
    );
  }
}

export default Profile;