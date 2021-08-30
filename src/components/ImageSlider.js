import React from "react";

export default class ImageSlider extends React.Component {

  state = {

    index: 0,
    names: ["Pete", "Stark", "Bruce"]

  }

  getNextName = () => {
    this.setState({
      index: (this.state.index + 1) % this.state.names.length

    });

  }

  render() {

    return (
      <div>

        <div>{this.state.names[this.state.index]}</div>

        <button onClick={this.getNextName}>next name</button>

      </div>
    );

  }

}