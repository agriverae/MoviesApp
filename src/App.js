import React, { Component } from "react";
import "./App.css";
import Movie from "./Movie";
class App extends Component {
  state = {
    movies: []
  };

  componentDidMount() {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=257889333e2a98d76029a6977fade69f&language=en-US&page=1"
    )
      .then(response => response.json())
      .then(data => {
        console.log(data);
        this.setState({
          movies: data.results
        });
      });
  }

  render() {
    let mostrar = null;

    if (this.state.movies.length === 0) mostrar = <h1>Cargando</h1>;
    else mostrar = this.state.movies.map(data => <Movie movie={data} />);

    return <div className="App">{mostrar}</div>;
  }
}

export default App;
