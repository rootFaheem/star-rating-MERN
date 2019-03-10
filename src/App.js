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
          onChange={rate => {
            console.log(rate);
            alert(rate);
          }}
        />
      );
    } else this.rateData = null;

    return (
      <div>
        <div className="App">
          <h1>Let's Rate it !</h1>
          <br />

          <div className="ratingbox">
            <div className="container">
              <button
                type="button"
                className="btn btn-success btn-lg rating"
                id="myBtn"
                onClick={() => this.setState({ show: true })}
              >
                Login
              </button>

              <div className="modal fade" id="myModal" role="dialog">
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <button
                        type="button"
                        className="close"
                        data-dismiss="modal"
                      >
                        &times;
                      </button>
                      <h3>Rate it</h3>
                    </div>
                    <div className="modal-body">{this.rateData}</div>
                  </div>
                </div>
              </div>
            </div>
            <br />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
