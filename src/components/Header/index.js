import React from 'react';
// import Score from '../Score';
import ("./style.css")

const Header = (props) => (
    <React.Fragment>
        <header>
        <h1 id="title"> Memory </h1> 
        <h2>Your Score: {props.score} | High Score: {props.highScore}</h2>
        </header>
    </React.Fragment>
)

export default Header