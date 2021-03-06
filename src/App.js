import React from 'react';

class App extends React.Component {
  state = {
    isLoading: true,
    movie: []
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 3000);
  }

  render() {
    const { isLoading } = this.state;

    return (
      <h1>{isLoading ? "Loading..." : "We are ready!!"}</h1>
    )
  }
}

export default App;
