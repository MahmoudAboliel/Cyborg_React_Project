import { Component } from 'react';
import './SectionRapper.css'

class SectionRapper extends Component {
    render() {
        return(
            <>
                <div className='section-wrapper'>
                    {this.props.children}
                </div>
            </>
        );
    }
}

export default SectionRapper;