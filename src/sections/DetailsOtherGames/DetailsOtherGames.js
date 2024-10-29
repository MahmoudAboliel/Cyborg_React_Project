import { Component } from 'react';
import './DetailsOtherGames.css';
import { SectionHeader, SectionRapper, DetailsGamesCard } from '../../components/index';
import img1 from '../../assets/images/game-01.jpg';
import img2 from '../../assets/images/game-02.jpg';
import img3 from '../../assets/images/game-03.jpg';

class DetailsOtherGames extends Component {
    render() {
        return(
            <>
                <SectionRapper>
                    <SectionHeader>Other Related <span>Games</span></SectionHeader>
                    <div className='details-games'>
                        <DetailsGamesCard img={img1} />
                        <DetailsGamesCard img={img2} />
                        <DetailsGamesCard img={img3} />
                        <DetailsGamesCard img={img1} />
                        <DetailsGamesCard img={img2} />
                        <DetailsGamesCard img={img3} />
                    </div>
                </SectionRapper>
            </>
        );
    }
}

export default DetailsOtherGames;