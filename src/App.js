import React, { Component } from "react";
import "./App.css";
import Rating from "react-rating";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>hi there</h1>
        <br />
        <div className="ratingbox">
          <Rating
            className="rating"
            stop={10}
            emptySymbol={[
              "fa fa-star-o fa-2x medium",
              "fa fa-star-o fa-2x medium",
              "fa fa-star-o fa-2x medium",
              "fa fa-star-o fa-2x medium",
              "fa fa-star-o fa-2x medium",
              "fa fa-star-o fa-2x medium"
            ]}
            fullSymbol={[
              "fa fa-star fa-2x medium",
              "fa fa-star fa-2x medium",
              "fa fa-star fa-2x medium",
              "fa fa-star fa-2x medium",
              "fa fa-star fa-2x medium",
              "fa fa-star fa-2x medium"
            ]}
            onChange={rate => {
              console.log(rate);
              alert(rate);
            }}
          />
        </div>
      </div>
    );
  }
}

export default App;
