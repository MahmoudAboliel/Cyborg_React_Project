import { Component } from 'react';
import './BrowseTop.css';
import { SectionHeader, SectionRapper, FeatureTopCard } from '../../components/index';
import featureTopCardInfo from '../../data/FeatureTopData';
import { Link } from "react-router-dom";

class BrowseTop extends Component {
    render() {
        const cards = featureTopCardInfo.map(item => {
            return <FeatureTopCard 
                key={item.id}
                img={item.img}
                title={item.title}
                gategory={item.gategory}
                rate={item.rate}
                download={item.download}
            />
        });
        return(
            <>
                <SectionRapper>
                    <SectionHeader><span>Top</span> <span>Downloaded</span></SectionHeader>
                    <div className='top-section-tiems'>
                        {cards}
                    </div>
                    <Link to="/#" className='link'>View All Games</Link>
                </SectionRapper>
            </>
        );
    }
}

export default BrowseTop;