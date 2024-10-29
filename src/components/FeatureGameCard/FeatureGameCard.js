import { Component } from 'react';
import './FeatureGameCard.css';
import { FaStar, FaDownload } from "react-icons/fa6";

class FeatureGameCard extends Component {
    render() {
        return(
            <>
                <div className='feature-card-item'>
                    <div className='feature-card'>
                        <img className='feature-card-image' src={this.props.img} alt='' />
                        <div className='feature-card-content'>
                            <h6 className='feature-card-title'>
                                {this.props.title}<br />
                                <span>{this.props.downloads} Downloads</span>
                            </h6>
                            <ul>
                                <li><span style={{color: "var(--color-icons)"}}><FaStar /></span>{this.props.rate}</li>
                                <li><span style={{color: "var(--color-primary)"}}><FaDownload /></span>{this.props.download}</li>
                            </ul>
                        </div>
                    </div>      
                </div>
            </>
        );
    }
}

export default FeatureGameCard;