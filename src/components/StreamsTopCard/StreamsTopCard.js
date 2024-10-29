import React, { Component } from 'react'
import './StreamsTopCard.css';
import { PrimaryButton } from '../index';
import { FaCircleCheck } from 'react-icons/fa6';

class StreamsTopCard extends Component {
  render() {
    return (
      <>
        <div className='streams-top-card'>
            <div className='streams-top-card-id'>{this.props.id}</div>
            <img className='' src={this.props.img} alt='' />
            <div className='streams-top-card-title'>
            <span ><FaCircleCheck /></span> {this.props.name}
            </div>
            <PrimaryButton url="/#">Follow</PrimaryButton>
        </div>
      </>
    )
  }
}

export default StreamsTopCard;