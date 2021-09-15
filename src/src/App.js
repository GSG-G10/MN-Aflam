import React, { Component, Fragment } from "react";
import "./App.css";
import LandingPage from "./componenet/LandingPage";
import Nav from "./componenet/NavBar";


class App extends Component {
  render() {
    return (
      <Fragment>
        <Nav />
        <LandingPage />

      </Fragment>
    );
  }
}

export default App;
