import React from 'react';
import ("./style.css");
// import ('../images');


class Pic extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
    };
  }

  onResetGame = () => this.setState({ clicked: false }, this.props.endGame())

  onClick = () => {
    const { onClick: parentOnClick } = this.props;
    const { clicked } = this.state;
    if (clicked) {
      this.onResetGame();
    }
    this.setState({ clicked: true });
    parentOnClick();
  }

  render() {
    const { image, id } = this.props;
    const { clicked } = this.state;
    return (
      <img 
        src={image}
        onClick={this.onClick} 
        id={id}
        clicked={clicked}
        alt=""
      />
    )
  }
}

export default Pic;

// clicked once - count goes up
// clicked twice - game is over

// function to end game is defined in parent, passed to Pic child component to be called