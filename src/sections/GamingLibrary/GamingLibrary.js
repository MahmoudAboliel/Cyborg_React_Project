import { Component } from 'react';
import './GamingLibrary.css';
import { SectionHeader, SectionRapper, GamingCard } from '../../components';
import gamingInfo from '../../data/GamingLibraryData';

class GamingLibrary extends Component {
    render() {
        function mapping(x) {
            const cards = x.map(item => <GamingCard 
                                            key={item.id} 
                                            img={item.img} 
                                            title={item.title} 
                                            category={item.category}
                                            date_added={item.date_added}
                                            hours_played={item.hours_played}
                                            downloaded={item.downloaded}
                                        />);
            return cards;
        }
        return(
            <>
                <SectionRapper>
                    <SectionHeader><span>Your Gaming</span> <span>Library</span></SectionHeader>
                    <div className='gaming-library-items'>
                        {mapping(gamingInfo)}
                    </div>
                </SectionRapper>
            </>
        );
    }
}

export default GamingLibrary;