import React, { Component } from 'react'
import './StreamsTop.css';
import { SectionHeader, SectionRapper, StreamsTopCard } from '../../components';
import StreamTopInfo from '../../data/StreamTopCardData';

class StreamsTop extends Component {
  render() {

    const cards = StreamTopInfo.map(item => <StreamsTopCard
                                              id={item.id}
                                              img={item.img}
                                              name={item.name}                            
      />);
    return (
      <>
        <SectionRapper>
          <SectionHeader>Top <span>Streams</span></SectionHeader>
          <div className='streams-top-items'>
            {cards}
          </div>
        </SectionRapper>
      </>
    );
  }
}

export default StreamsTop;