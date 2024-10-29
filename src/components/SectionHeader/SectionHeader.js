import { Component } from "react";
import './SectionHeader.css';

class SectionHeader extends Component {
    render() {
        return(
            <>
                <div className='section-header'>
                <h4>{this.props.children}</h4>
                    
                </div>
            </>
        );
    }
}

export default SectionHeader;