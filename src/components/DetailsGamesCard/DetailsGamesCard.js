import React, { Component } from 'react'
import './DetailsGamesCard.css';

import { FaStar, FaDownload } from 'react-icons/fa6';

class DetailsGamesCard extends Component {
  render() {
    return (
      <>
        <div className='details-games-card'>
            <img className='' src={this.props.img} alt='' />
            <h6>Dota 2<br /><span>Sandbox</span></h6>
            <h6>
                <span style={{color: "var(--color-icons)"}}><FaStar /></span> 4.8
                <br />
                <span style={{color: "var(--color-primary)"}}><FaDownload /></span> 2.3M
            </h6>
        </div>  
      </>
    )
  }
}

export default DetailsGamesCard