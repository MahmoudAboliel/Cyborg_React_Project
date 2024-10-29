import { Component } from 'react';
import './Buttons.css';

class primaryButton extends Component {
    render() {
        return(
            <>
            <div className='button primary-button'>
                <a href={this.props.url}>{this.props.children}</a>
            </div>
            </>
        );
    }
}

class SecondaryButton extends Component {
    render() {
        return(
            <>
            <div className='button secondary-button'>
                <a href={this.props.url}>{this.props.children}</a>
            </div>
            </>
        );
    }
}

export default primaryButton;
export {SecondaryButton};
