import React from "react";
import axios from "axios";

class App extends React.Component {
  state = {
    isLoading: true,
    movie: []
  };

  getMovies = async () => {
    const movies = await axios.get("https://yts-proxy.nomadcoders1.now.sh/list_movies.json");
    console.log(movies)
  };

  componentDidMount() {
    this.getMovies();
  };

  render() {
    const { isLoading } = this.state;

    return (
      <h1>{isLoading ? "Loading..." : "We are ready!!"}</h1>
    )
  }
}

export default App;
