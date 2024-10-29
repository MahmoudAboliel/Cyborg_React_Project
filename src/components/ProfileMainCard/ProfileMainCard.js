import React, { Component } from 'react';
import './ProfileMainCard.css';
import { FaEye } from 'react-icons/fa6';

class ProfileMainCard extends Component {
  render() {
    return (
      <>
        <div className='clips-card'>
            <img className='' src={this.props.img} alt='' />
            <div className='content'>
                <h6>{this.props.title}</h6>
                <span><span style={{color: "var(--color-primary)"}}><FaEye /></span> {this.props.views}</span>
            </div>
        </div>
      </>
    );
  }
}

export default ProfileMainCard;