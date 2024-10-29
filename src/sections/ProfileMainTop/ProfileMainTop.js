import React, { Component } from 'react';
import './ProfileMainTop.css';
import { ProfileState, ProfileInfo } from '../../components/index';
import img from '../../assets/images/profile.jpg'

class ProfileMainTop extends Component {
  render() {
    return (
        <>
            <div className='profile-main-top row'>
                <img className='col-lg-4' src={img} alt='' />
                <span className='col-lg-4'><ProfileState /></span>
                <span className='col-lg-4'><ProfileInfo /></span>
            </div>
        </>
    );
  }
}

export default  ProfileMainTop;