import { Component } from 'react';
import './Details.css';
import { DetailsMain, FortniteDetails, DetailsOtherGames } from '../../sections/index';

class Details extends Component {
    render() {
        return(
            <>
                <DetailsMain />
                <FortniteDetails />
                <DetailsOtherGames />
            </>
        );
    }
}

export default Details;