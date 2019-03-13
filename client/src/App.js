import React, { Component } from "react";

import "./App.css";

import Google from "./components/google";

class App extends Component {
  render() {
    return (
      <div>
        <div className="App">
          <h1>Save4thPillar</h1>
          <br />
          <div className="ratingbox">
            <br />
            <Google />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
