import { Component } from 'react';
import './LiveCard.css';

class LiveCard extends Component {
    render() {
        return(
            <>
                <div className='live-stream-card'>
                    <img className='' src={this.props.img} alt='' />
                    <h3>{this.props.title}</h3>
                    <p>{this.props.description}</p>
                </div>
            </>
        );
    }
}

export default LiveCard;