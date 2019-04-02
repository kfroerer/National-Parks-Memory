import React from 'react';
import Pic from './Pic/Pic';
import images from '../images.json'
// import Col from "./Col";
// import Row from "./Row";

// class PicField extends React.Component {
    // state = {
    //   pics: [],
    //   score: 0,
    //   highScore: 0
    // }

    //  componentDidMount() {
    //    this.setState({pics: images})
    //  }
    
    // onClick = id => {
    //     console.log(id);
    //    let pics = this.state.pics
    //    pics.map((pic, index) => {
    //        if (index === id) {
    //            pic.clicked = true;
    //         }
    //     }).sort( () => 0.5 - Math.random());
    //     this.setState(
    //         {
    //             state: this.state.score + 1,
    //             pics: pics
    //         }
    //     );
    //     if (this.state.score > this.state.highScore) {
    //         this.setState(
    //             {
    //                 highScore: this.state.score
    //             }
    //             );
    //         };
    //     };
        
            
// needs to reset score, reshuffle array, keep highScore
//          onEndGame = () => {
                    
//              if (pic.clicked === true) {
//                this.endGame()
//              }
//                 this.setState(
//                     {
//                     score: 0, 
//                     pics: {images}
//                     }
//                 )
//             }
//     render() {
//         return (
//             images.length && images.map(element => 
//                 ( <Pic image={element.image} key={element.id} onClick={() => this.onClick(element.id)}/>  )) 
//         )
//     };
// };

// export default PicField;
