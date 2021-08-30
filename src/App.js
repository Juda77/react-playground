// import logo from './logo.svg';
import React from 'react';
import './App.css';
import FetchMeme from './components/FetchMeme';
import MyForm from './components/MyForm';


function PrintMessage(props) {
  return (
    <div>
      <p>{props.message}</p>
      <p>{props.message2}</p>
      </div>
  );
}

export default class App extends React.Component {

  render() {
    return(

      <div>
        <FetchMeme />
      </div>
    );

  }

}

// demonstrates conditional components
// class App extends React.Component {

//   state = {
//     visible: true,
//     whichComponentToShow: "ImageSlider"
//   }

//   render() {
//     if (this.state.whichComponentToShow === "ImageSlider") {
//       return(
//         <div>
//           <ImageSlider />
//           <button onClick={() => {
//             this.setState({
//               whichComponentToShow: "Counter2"
//             });
//           }}>
//             set to counter
//           </button>
//         </div>
//       );
//     } else if (this.state.whichComponentToShow === "Counter2") {
//       return(
//         <div>
//           <Counter2 initialCount={100}/>
//           <button onClick={() => {
//             this.setState({
//               whichComponentToShow: "ImageSlider"
//             });
//           }}>
//             set to image slider
//           </button>
//         </div>
//       );
//     } else { // this'll never reach
//       return null;
//     }
//   }




// {/*

//       Note: This is the original stuff
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />

//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header> */}