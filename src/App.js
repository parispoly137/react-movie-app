import React from 'react';
import PropTypes from "prop-types"

let friends = [
  {
    id: 1,
    name: "Jason",
    age: 15
  },
  {
    id: 2,
    name: "Jackson",
    age: 19
  },
  {
    id: 3,
    name: "Samuel",
    age: 23
  }
];



function Friends({ name, age }) {
  return (
    <h5>I wanna be friends with {name} who is {age} years old.</h5>
  )
}

Friends.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired
}



class App extends React.Component {
  state = {
    isLoading: true,
    movie: [],
    count: 0
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 3000);
  }

  add = () => {
    this.setState(current => ({ count: current.count + 1 }));
  }

  minus = () => {
    this.setState(current => ({ count: current.count - 1 }));
  }

  render() {
    const { isLoading } = this.state;

    return (
      <div>
        <h1>{isLoading ? "Loading..." : "We are ready!!"}</h1>
        <div>
          <h2>The number is: {this.state.count}</h2>
          <button onClick={this.add}>Add</button>
          <button onClick={this.minus}>Minus</button>
        </div>
        {friends.map(friend => (
          <Friends key={friend.id} name={friend.name} age={friend.age} />
        ))}
      </div>
    )
  }
}

export default App;
