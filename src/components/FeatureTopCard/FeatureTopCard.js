import { Component } from 'react';
import './FeatureTopCard.css';
import { FaStar, FaDownload } from "react-icons/fa6";

class FeatureTopCard extends Component {
    render() {
        return(
            <>
            <div className='top-card'>
                <div className='card-content'>
                    <img src={this.props.img} alt='' />
                    <div className='card-title'>
                        <h6>{this.props.title}<span><br />{this.props.gategory}</span></h6>
                        <ul>
                            <li><span style={{color: "var(--color-icons)"}}><FaStar /></span>{this.props.rate}</li>
                            <li><span style={{color: "var(--color-primary)"}}><FaDownload /></span>{this.props.download}</li>
                        </ul>
                    </div>
                </div>
                <div className='card-download' style={{color: "var(--color-primary)"}}>
                    <FaDownload />
                </div>
            </div>
            </>
        );
    }
}

export default FeatureTopCard;