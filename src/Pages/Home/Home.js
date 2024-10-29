import { Component } from 'react';
import './Home.css';
import { Hero, MostPopular, GamingLibrary } from '../../sections/index';

class Home extends Component {
    render() {
        return(
            <>
                <Hero />
                <MostPopular />
                <GamingLibrary />
            </>
        );
    }
}

export default Home;