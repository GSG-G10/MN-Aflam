import React, { Component, Fragment } from "react";
import "./App.css";
import Card from "./componenet/Card";
import LandingPage from "./componenet/LandingPage";
import Nav from "./componenet/NavBar";

class App extends Component {
  state = {
    movie: "",
    cards: null,
  };

  getDataAPI = () => {
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=f799f1be0978aee78e1d1d7ce0241628&query=${this.state.movie}`
    )
      .then((data) => data.json())
      .then((data) => this.setState({ cards: data }));
  };

  handleChange = (e, key) => {
    this.setState({ [key]: e.target.value });
  };

  render() {
    this.getDataAPI();
    return (
      <Fragment>
        <Nav />
        <LandingPage handleChange={this.handleChange} />
        <Card />
      </Fragment>
    );
  }
}

export default App;
