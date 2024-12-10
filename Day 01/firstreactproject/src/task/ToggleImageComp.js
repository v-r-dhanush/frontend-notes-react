import React, { Component } from 'react';
import thor from '../assests/thor.jpeg';
import iron from '../assests/iron.jpeg';

class ToggleImageComp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checkHero: true 
        };
    }

   
    toggleImage = () => {
        this.setState((prevState) => ({
            checkHero: !prevState.checkHero 
        }));
    };

    render() {
        const { checkHero } = this.state; 

        return (
            <div>
                <h2>Toggle Image Component</h2>
                <img src={checkHero ? thor : iron} alt={checkHero ? 'thor' : 'iron'} height='200px' width='200px' />
                <br />
                <button onClick={this.toggleImage} className="btn btn-warning" style={{ marginTop: '10px' }}>
                    Toggle Image
                </button>
            </div>
        );
    }
}

export default ToggleImageComp;