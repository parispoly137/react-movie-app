import React from 'react';
import PropTypes from "prop-types";

class App extends React.Component {
  state = {
    count: 0
  };

  add = () => {
    this.setState(current => ({ count: current.count + 1 }));
  }

  minus = () => {
    this.setState(current => ({ count: current.count - 1 }));
  }

  constructor(props) {
    super(props);
    console.log("I just got born.");
  }

  componentDidMount() {
    console.log("Rendered for the first time.")
  }

  componentDidUpdate() {
    console.log("The component has been updated.")
  }

  componentWillUnmount() {
    console.log("The component is dead.") //But you won't be able to see it.
  }

  render() {
    console.log("Rendering complete.");
    return (
      <div>
        <h1>The number is: {this.state.count} </h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>

    )
  }

}

export default App;
