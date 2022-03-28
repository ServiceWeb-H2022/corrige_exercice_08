import React from 'react';
import './Avatar.css';

class Avatar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div id="user_photo">
                {this.props.isLoaded && 
                    <img src={this.props.image} alt="L'usager"/>
                }
            </div>
        );
    }
}

export default Avatar;