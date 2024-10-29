import { Component } from 'react';
import './BrowseFeature.css';
import { SectionRapper, SectionHeader, FeatureGameCard } from '../../components/index';
import featureGameCardInfo from '../../data/FeaturedData';

class BrowseFeature extends Component {
    render() {

        const cards = featureGameCardInfo.map(item => <FeatureGameCard
                                                        img={item.img}
                                                        title={item.title}
                                                        downloads={item.downloads}
                                                        rate={item.rate}
                                                        download={item.download}
                                                    />);
            
        return(
            <>
                <SectionRapper >
                    <SectionHeader><span>Featured</span> <span>Games</span></SectionHeader>
                    <div className='feature-items'>
                        {cards}                                  
                    </div>
                </SectionRapper>
            </>
        );
    }
}

export default BrowseFeature;