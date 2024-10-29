import { Component } from "react";
import './NavItem.css'

class NavItem extends Component {
    render() {
        return(
            <>
                <li className="nav-item">
                    {this.props.children}
                </li>
            </>
        );
    }
}

class NavItemDropDown extends Component {
    render() {
        return(
            <>
                <li className="nav-item dropdown">
                    {this.props.children}
                </li>
            </>
        );
    }
}

export default NavItem;
export {NavItemDropDown}