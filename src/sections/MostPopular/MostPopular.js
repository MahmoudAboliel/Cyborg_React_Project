import { Component } from 'react';
import './MostPopular.css'
import {MostPopularCard, SectionHeader, SectionRapper} from '../../components/index';
import cardInfo from '../../data/MostPopularData';

class MostPopular extends Component {
    render() {
        
            const cards = cardInfo.map(item => <MostPopularCard
                                            key={item.id} 
                                            img={item.img} 
                                            title={item.title} 
                                            category={item.category}
                                            rate={item.rate}
                                            download={item.download}
                                        />);
        
        return(
            <>
                <SectionRapper>
                    <SectionHeader><span>Most Popular</span> <span>Right Now</span></SectionHeader>
                    <div className='most-popular-items'>
                        {cards}
                    </div>
                </SectionRapper>
            </>
        );
    }
}
export default MostPopular;