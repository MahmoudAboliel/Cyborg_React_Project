import React, { Component } from 'react';
import './ProfileMain.css';
import { ProfileMainTop, ProfileMainBottom }  from '../../sections/index';
import { SectionRapper } from '../../components/index';

class ProfileMain extends Component {
  render() {
    return(
        <>
            <SectionRapper>
                <ProfileMainTop />
                <hr />
                <ProfileMainBottom />
            </SectionRapper>
        </>
    );
  }
}

export default ProfileMain;