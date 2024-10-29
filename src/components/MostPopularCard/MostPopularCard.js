import { Component } from 'react';
import './MostPopularCard.css'
import { FaStar, FaDownload } from "react-icons/fa6";

class Card extends Component {
    render() {
        return(
            <>
                <div className='most-popular-item'>
                    <div className='card-wrapper'>
                        <img className='most-popular-item-image' src={this.props.img} alt='' />
                        <div className='most-popular-item-conten'>
                            <h4 className='most-popular-item-title'>
                                {this.props.title} <br />
                                <span>{this.props.category}</span>
                            </h4>
                            <ul>
                                <li><span style={{color: "var(--color-icons)"}}><FaStar /></span> <span> {this.props.rate}</span></li>
                                <li><span style={{color: "var(--color-primary)"}}><FaDownload /></span><span> {this.props.download}</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Card;