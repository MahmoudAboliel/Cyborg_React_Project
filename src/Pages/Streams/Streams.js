import React, { Component } from 'react';
import './Streams.css';
import { BrowseFeature, StreamsTop, MostPopularLiveStream } from '../../sections/index';

class Streams extends Component {
  render() {
    return (
      <>
        <div className='brwose-page row'>
          <div className='feature-section col-lg-7'><BrowseFeature /></div>
          <div className='top-section col-lg-5'><StreamsTop /></div>
        </div>
        <MostPopularLiveStream />
      </>
    );
  }
}

export default Streams;