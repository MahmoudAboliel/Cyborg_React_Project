import { Component } from 'react';
import './FortniteDetails.css';
import { SectionRapper, SecondaryButton } from '../../components/index';
import { FaStar, FaDownload, FaGamepad, FaServer } from 'react-icons/fa6';
import img1 from '../../assets/images/details-01.jpg';
import img2 from '../../assets/images/details-02.jpg';
import img3 from '../../assets/images/details-03.jpg';

class FortniteDetails extends Component {
    render() {
        return(
            <>
                <div className='fortnite-details'>
                    <h1>Fortnite Details</h1>
                    <SectionRapper>
                        <div className='fortnite-cards'>
                            <div className='fortnite-card-one'>
                                <h6>Fortnite<br /><span>Sandbox</span></h6>
                                <h6>
                                    <span style={{color: "var(--color-icons)"}}><FaStar /></span> 4.8
                                    <br />
                                    <span style={{color: "var(--color-primary)"}}><FaDownload /></span> 2.3M
                                </h6>
                            </div>  
                            <div className='fortnite-card-two'>
                            <h6>
                                <span style={{color: "var(--color-icons)"}}><FaStar /></span>
                                <br />4.8
                            </h6>
                            <h6>
                                <span style={{color: "var(--color-primary)"}}><FaDownload /></span>
                                <br />2.3M
                            </h6>
                            <h6>
                                <span style={{color: "var(--color-primary)"}}><FaServer /></span>
                                <br />36GB
                            </h6>
                            <h6>
                                <span style={{color: "var(--color-primary)"}}><FaGamepad /></span>
                                <br />4.8
                            </h6>
                            </div>
                        </div>
                        <div className='fortnite-images row'>
                            <img className='col-lg-4' src={img1} alt='' />
                            <img className='col-lg-4' src={img2} alt='' />
                            <img className='col-lg-4' src={img3} alt='' />
                        </div>
                        <p className='fortnite-description'>
                            Cyborg Gaming is free React website template provided by (MD). This is Bootstrap v5.1.0 layout. If you want to get the PSD source files, please contact us. Lorem ipsum dolor sit consectetur es dispic dipiscingei elit, sed doers eiusmod lisum hored tempor.
                        </p>
                        <SecondaryButton url="#/">Download Fortnite Now!</SecondaryButton>
                    </SectionRapper>
                </div>
            </>
        );
    }
}

export default FortniteDetails;