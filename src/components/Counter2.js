import React from "react";

export default class Counter2 extends React.Component {

  // constructors aren't necessary to use states,
  // but you will need them if you want to accept
  // props and use those props in the state
  constructor(props) {
    super(props);

    this.state = {
      count: props.initialCount
    };

  }

  decrement = () => {

    // sets the state to be whatever's in here
    this.setState({
      count: this.state.count - 1
    });

  }
  render() {

    return (

      <div>
        <div>Count: {this.state.count}</div>
        <button onClick={this.decrement}>Decrement</button>

      </div>

    );

  }

}