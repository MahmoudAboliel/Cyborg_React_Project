import { Component } from "react";
import './Header.css'
import logo from '../../assets/images/logo.png';
import profile from '../../assets/images/profile-header.jpg';
import { NavItem } from "../../components/index";
import { Link } from "react-router-dom";

class Header extends Component {
    // constructor() {
    //     super();
    // }
    render() {
        return(
            <>
                <div className="navbar navbar-expand-md navbar-dark cyborg-navbar">
                    <div className="container">
                        <Link to="/" className="navbar-brand">
                           <img src={logo} alt="" />
                        </Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainmenu">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="mainmenu">
                            <ul className="navbar-nav ms-auto">
                                
                                <NavItem>
                                    <Link to="/" className="nav-link">Home</Link>
                                </NavItem>
                                
                                <NavItem>
                                    <Link to="/browse" className="nav-link">Browse</Link>
                                </NavItem>
                                
                                <NavItem>
                                    <Link to="/details" className="nav-link">Details</Link>
                                </NavItem>
                                
                                <NavItem>
                                    <Link to="/streams" className="nav-link">Streams</Link>
                                </NavItem>
                                
                                <NavItem>
                                    <Link to="/profile" className="nav-link"><span className="profile-link">Profile <img src={profile   } alt="" /></span></Link>
                                </NavItem>
                            </ul>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Header;