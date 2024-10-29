import { Component } from 'react';
import './MostPopularLiveStream.css';
import { SectionHeader, SectionRapper, MostPopularLiveStreamCard, PrimaryButton } from '../../components';
import mostPopularLiveInfo from '../../data/MostPopularLiveData';

class MostPopularLiveStream extends Component {
    render() {

        const cards = mostPopularLiveInfo.map(item => <MostPopularLiveStreamCard 
                                                            key={item.id}
                                                            avt={item.avt}
                                                            img={item.img}
                                                            name={item.name}
                                                            nikName={item.nikName}
                                                            title={item.title}
                                                            download={item.download}
        />);
        return(
            <>
            <SectionRapper>
                <SectionHeader><span>MostPopular</span> <span>Live Stream</span></SectionHeader>
                <div className='most-popular-live-items'>
                    {cards}
                </div>
                <div className='most-popular-live-btn'>
                    <PrimaryButton url="/streams">Discover All Streams</PrimaryButton>
                </div>
            </SectionRapper>
            </>
        );
    }
}

export default MostPopularLiveStream;