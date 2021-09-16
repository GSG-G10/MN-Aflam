import React, { Component, Fragment } from "react";
import "./App.css";
import Card from "./componenet/Card";
import LandingPage from "./componenet/LandingPage";
import Nav from "./componenet/NavBar";

class App extends Component {
  state = {
    movie: "",
    cards: [],
  };

  getDataBySearch = () => {
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=f799f1be0978aee78e1d1d7ce0241628&query=${this.state.movie}`
    )
      .then((data) => data.json())
      .then((data) => this.setState({ cards: data.results }));
  };

  getDataTrending = () => {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=f799f1be0978aee78e1d1d7ce0241628&query&language=en-US"
    )
      .then((data) => data.json())
      .then((data) => this.setState({ cards: data.results }));
  };

  handleChange = (e, key) => {
    this.setState({ [key]: e.target.value });
  };

  componentDidMount() {
    this.getDataTrending();
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(this.state);
    if (prevState.movie !== this.state.movie) {
      this.getDataBySearch();
    }
  }
  render() {
    const { cards, movie } = this.state;
    return (
      <Fragment>
        <Nav />
        <LandingPage handleChange={this.handleChange} movie={movie} />
        <main>
        <div className="searchResult">

        {cards &&
          cards.map(
            ({
              id,
              title,
              poster_path,
              vote_average,
              release_date,
              overview,
            }) => (
              <Card
                key={id}
                title={title}
                url={poster_path}
                vote={vote_average}
                date={release_date}
                overview={overview}
              />
            )
          )}
          </div>
        </main>
      </Fragment>
    );
  }
}

export default App;
