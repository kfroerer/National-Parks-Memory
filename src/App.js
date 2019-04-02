import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/index';
import Hero from './components/Hero';
// import PicField from './components/PicField';
import images from "./images.json";
import Pic from "./components/Pic/Pic";
// import { ENGINE_METHOD_PKEY_ASN1_METHS } from 'constants';
// import { endianness } from 'os';

class App extends Component {
  state = {
    pics: [],
    score: 0,
    highScore: 0
  }

  componentDidMount() {
    this.setState({ pics: images })
  }
  
  componentDidUpdate(prevProps, prevState) {
    const { score } = this.state;
    if (score > prevState.highScore) {
      console.warn('UPDATE SCOOOORE', score, prevState.score);
      this.setState({ highScore: score });
    }
  }

  endGame = () => {
    console.log("before set state score: " + this.state.score)
    this.setState({
      score: 0,
      pics: this.onSortPics(),
      // pics: images.sort(() => 0.5 - Math.random()),
    })
    alert("You lose!");
  }
  
  // Explicitly returns sorted array of pics in state
  onSortPics = () => this.state.pics.sort(() => 0.5 - Math.random())

  onClick = () => {
    const pics = this.onSortPics();
    this.setState({ score: this.state.score + 1, pics });
  }

  render() {
    console.warn('score yo!', this.state.score);
    return (
      <div className="App">
        <Header score={this.state.score} highScore={this.state.highScore}/>
        <Hero />
         
      {images.length && images.map((element, index) => 
        ( 
          <Pic 
            image={element.image} 
            key={element.id} 
            onClick={() => this.onClick(index)}
            onEndGame={this.endGame}
          />  
        )
      )}
      </div>
    ); 
  }
}

export default App;
