import { Component } from 'react';
import './Browse.css';
import { BrowseFeature, BrowseTop, LiveStream, MostPopularLiveStream } from '../../sections/index';

class Browse extends Component {
    render() {
        
        return(
            <>
                <div className='brwose-page row'>
                    <div className='feature-section col-lg-7'><BrowseFeature /></div>
                    <div className='top-section col-lg-5'><BrowseTop /></div>
                </div>
                <LiveStream />
                <MostPopularLiveStream />
            </>
        );
    }
}

export default Browse;