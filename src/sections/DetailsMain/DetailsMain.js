import { Component } from 'react';
import './DetailsMain.css';
import img1 from '../../assets/images/feature-left.jpg';
import img2 from '../../assets/images/feature-right.jpg';

class DetailsMain extends Component {
    render() {
        return(
            <>
                <div className='details-main row'>
                    <img className='col-lg-4 col-md-6' src={img1} alt='' />
                    <img className='col-lg-8 col-md-6' src={img2} alt='' />
                </div>
            </>
        );
    }
}

export default DetailsMain;