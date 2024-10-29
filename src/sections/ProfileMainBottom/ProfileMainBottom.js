import React, { Component } from 'react';
import './ProfileMainBottom.css';
import { SectionHeader, ProfileMainCard } from '../../components/index';
import ProfileClipsData from '../../data/ProfileClipsData';


class ProfileMainBottom extends Component {
  render() {

    const cards = ProfileClipsData.map(item => <ProfileMainCard 
                                                    key={item.id}
                                                    img={item.img}
                                                    title={item.title}
                                                    views={item.views}
                                    />);
    return (
      <>
        <div className='profile-clips'>
            <SectionHeader>Your Most Popular <span>Clips</span></SectionHeader>
            <div className='clips-items'>
                {cards}
            </div>
        </div>
      </>
    );
  }
}

export default ProfileMainBottom;