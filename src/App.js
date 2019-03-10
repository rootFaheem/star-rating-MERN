import React, { Component } from "react";
import "./App.css";
import Rating from "react-rating";

class App extends Component {
  state = {
    show: false
  };

  render() {
    const show = this.state.show;

    if (show) {
      this.rateData = (
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
      );
    } else this.rateData = null;

    return (
      <div className="App">
        <h1>Let's Rate it !</h1>
        <br />

        <div className="ratingbox">
          <button
            style={{ marginTop: "40px" }}
            className="btn btn-success btn-lg"
            onClick={() => this.setState({ show: true })}
          >
            {" "}
            Rate Now
          </button>
          <br />

          {this.rateData}
          <br />
          <br />
          <br />
          <br />
        </div>
      </div>
    );
  }
}

export default App;
