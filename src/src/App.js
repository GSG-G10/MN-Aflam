import React, { Component, Fragment } from "react";
import "./App.css";
import Card from "./componenet/Card";
import LandingPage from "./componenet/LandingPage";
import Nav from "./componenet/NavBar";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Nav />
        <LandingPage />
        <Card />
      </Fragment>
    );
  }
}

export default App;
