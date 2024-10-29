import { Component } from 'react';
import './Hero.css';
import { PrimaryButton } from '../../components';

class Hero extends Component {
    render() {
        return(
            <>
                <div className='hero-main'>
                    <div className='hero-text'>
                        <h6 className='hero-subtitle'>Welcome To Cyborg</h6>
                        <h4 className='hero-title'><em>Browse</em> Our Popular Games Here</h4>
                        <PrimaryButton url="browse.html">Browse Now</PrimaryButton>
                    </div>
                </div>
            </>
        );
    }
}

export default Hero;