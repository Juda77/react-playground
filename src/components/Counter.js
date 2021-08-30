
import { RawDescriptionHelpFormatter } from "argparse";
import React from "react";

export default class Counter extends React.Component {


  constructor(props) {
    super(props);

    this.state = {
      count: 0
    };
  }

  increment = () => {

    // setState will re-render the component
    // with the state changed
    this.setState({
      count: this.state.count + 1
    });

  }

  render() {

    return (

      <div>
        <div>Count: {this.state.count}</div>
        <button onClick={this.increment}>increment</button>
      </div>
    );


  }

}
