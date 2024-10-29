import { Component } from 'react';
import './MostPopularLiveStreamCard.css';
import { FaCircleCheck, FaEye, FaGamepad } from "react-icons/fa6";


class MostPopularLiveStreamCard extends Component {
    render() {
        return(
            <>
                <div className='most-popular-live-card'>
                    <div className='live-card-header-items'>
                        <img className='live-card-header' src={this.props.img} alt='' />
                        <span>Live</span>
                        <span><FaEye /> {this.props.download}</span>
                        <span><FaGamepad /> {this.props.nikName}</span>
                    </div>
                    <div className='most-popular-live-content'>
                        <img className='live-card-avatar' src={this.props.avt} alt='' />
                        <div className='most-popular-live-title'>
                            <div className='name'>
                                <FaCircleCheck /> {this.props.name}</div>
                            <div className='title'><h5>{this.props.title}</h5></div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default MostPopularLiveStreamCard;