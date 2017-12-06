import React, { Component } from 'react';
//import React from "react";
import logo from './silhouette.svg';
import logo2 from './silhouette2.svg';
import './App.css';
import ImageCard from "./components/ImageCard";
import Title from "./components/Title";
import Wrapper from "./components/Wrapper";
import images from "./images.json";
class App extends Component {
// const App = () => (
  // assign this.state.images to the images json array
  state = {
    images
  };
    removeImage = id => {
    // Filter this.state.images for images with an id not equal to the id being removed
    const images = this.state.images.filter(image => image.id !== id);
    // Set this.state.images equal to the new images array
    this.setState({ images });
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />&emsp;&emsp;&emsp;&emsp;
          <img src={logo2} className="App-logo" alt="logo2" />
          <h1 className="App-title">Ice Skating Clicky Game</h1>
        </header>
        <Title>Click on an image to earn points, but don't click on an image more than once.</Title>
        <Wrapper>
          {this.state.images.map(image => (
            <ImageCard
              removeImage={this.removeImage}
              id={image.id}
              key={image.id}
              name={image.name}
              image={image.image}
            />
          ))}
        </Wrapper>
      </div>
    );
  }
}

export default App;