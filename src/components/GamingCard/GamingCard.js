import { Component } from 'react';
import './GamingCard.css';
import { SecondaryButton } from '../index';

class GamingCard extends Component {
    render() {
        return(
            <>
                <div className='gaming-card'>
                    <ul className='row'>
                        <li className='col-lg-2 col-md-12 col-sm-12 d-flex justify-content-center'><img src={this.props.img} alt='' /></li>
                        <li className='col-lg-2 col-md-6 col-sm-6'><h4>{this.props.title}</h4><span>{this.props.category}</span></li>
                        <li className='col-lg-2 col-md-6 col-sm-6'><h4>Date Added</h4><span>{this.props.date_added}</span></li>
                        <li className='col-lg-2 col-md-6 col-sm-6'><h4>Hours Played</h4><span>{this.props.hours_played}</span></li>
                        <li className='col-lg-2 col-md-6 col-sm-6'><h4>Currently</h4><span>{this.props.downloaded}</span></li>
                        <div className='main-btn col-lg-2 col-md-12 col-sm-12  d-flex justify-content-center'>
                            
                            <SecondaryButton url="/#">download</SecondaryButton>
                        </div>
                    </ul>
                    
                </div>
            </>
        );
    }
}

export default GamingCard;