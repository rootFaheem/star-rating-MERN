import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import Rating from "react-rating";

class App extends Component {
  state = {
    show: false
  };
  rateHandler = rate => {
    const selectedRate = rate;
    const data = {
      newVote: selectedRate,
      _id: "5c8636eaff567a26a218432f"
    };
    console.log(rate);
    axios
      .post("/api/votes", data)
      .then(res => {
        console.log(res);
      })
      .catch(err => console.log(err));
  };
  render() {
    const show = this.state.show;
    if (show) {
      this.rateData = (
        <Rating
          className="rating"
          stop={5}
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
          onChange={rate => this.rateHandler(rate)}
        />
      );
    }

    return (
      <div>
        <div className="App">
          <h1>Let's Rate it !</h1>
          <br />

          <div className="ratingbox">
            <div>
              <button
                type="button"
                className="btn btn-success btn-lg"
                onClick={() => this.setState({ show: true })}
              >
                Rate it
              </button>
              <div>
                {this.state.show ? <h4>you rated</h4> : null}
                {this.rateData}
              </div>
              <br />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
