import { Component } from 'react';
import './LiveStream.css'
import { SectionHeader, LiveCard, PrimaryButton } from '../../components/index';
import LiveCardInfo from '../../data/LiveStreamData';

class LiveStream extends Component {
    render() {
        const cards = LiveCardInfo.map(item => <LiveCard 
                                                    key={item.id}
                                                    img={item.img}
                                                    title={item.title}
                                                    description={item.description}
                                    />
        );
        return(
            <>
                <div className='live-stream'>
                    <SectionHeader><span>How To Start Your</span> <span>Live Stream</span></SectionHeader>
                    <div className='live-stream-items'>
                        {cards}
                    </div>
                    <div className='live-btn'>
                        <PrimaryButton url="/#">Go To Profile</PrimaryButton>
                    </div>
                </div>
            </>
        );
    }
}

export default LiveStream;