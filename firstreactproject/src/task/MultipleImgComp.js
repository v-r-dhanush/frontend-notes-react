import React, { Component } from 'react';
import black from '../assests/black.jpeg';
import thor from '../assests/thor.jpeg';
import iron from '../assests/iron.jpeg'; 

class MultipleImgComp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedImage: null,  
        };
    }

    toggleImage = (image) => {
        this.setState({ selectedImage: image });
    };

    render() {
        return (
            <div>
                <h2>Multiple Image with Name</h2>

                {this.state.selectedImage && (
                    <div style={{ marginTop: '20px' }}>
                        <h3>{this.state.selectedImage.alt}</h3>
                        <img
                            src={this.state.selectedImage.src}
                            alt={this.state.selectedImage.alt}
                            height='200px'
                            width='200px'
                        />
                    </div>
                )}

                
              
                <button
                    onClick={() => this.toggleImage({ src: black, alt: 'black' })}
                    className="btn btn-info"
                    style={{ marginTop: '10px', marginRight: '10px' }}
                >
                    Show black
                </button>
                <button
                    onClick={() => this.toggleImage({ src: thor, alt: 'thor' })}
                    className="btn btn-secondary"
                    style={{ marginTop: '10px', marginRight: '10px' }}
                >
                    Show thor
                </button>
                <button
                    onClick={() => this.toggleImage({ src: iron, alt: 'iron' })}
                    className="btn btn-primary"
                    style={{ marginTop: '10px', marginRight: '10px' }}
                >
                    Show iron
                </button>
            </div>
        );
    }
}

export default MultipleImgComp;