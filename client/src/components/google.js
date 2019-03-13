import GoogleLogin from "react-google-login";
import { GoogleLogout } from "react-google-login";

import Rating from "react-rating";
import React, { Component } from "react";
import axios from "axios";

export default class google extends Component {
  state = {
    userData: {
      isLoggedIn: false,
      userID: "",
      name: "",
      email: ""
    },
    show: false
  };

  rateHandler = rate => {
    const isLoggedIn = this.state.isLoggedIn;
    if (isLoggedIn) {
      const selectedRate = rate;
      const name = this.state.userData.name;
      const data = {
        newVote: selectedRate,
        _id: "5c8636eaff567a26a218432f",
        userName: name,
        userEmail: this.state.userData.email,
        userId: this.state.userData.userID
      };
      console.log("you have rated: " + rate + " star rating");
      console.log(data);
      axios
        .post("/api/votes", data)
        .then(res => {
          console.log(res);
        })
        .catch(err => console.log(err));
    }
  };

  setTimeout = (() => {
    console.log(this.state.data);
  },
  9000);

  responseGoogle = response => {
    console.log(response);
    this.setState({
      isLoggedIn: true,
      userID: response.w3.Eea,
      name: response.w3.ig,
      email: response.w3.U3,
      picture: response.profileObj.imageUrl
    });
  };

  componentClicked = () => console.log("clicked");

  logoutHandler = () => {
    const auth2 = window.gapi.auth2.getAuthInstance();
    if (auth2 != null) {
      auth2.signOut().then(auth2.disconnect().then(this.props.onLogoutSuccess));
      window.location.reload();
    }
  };
  render() {
    const isLoggedIn = this.state.isLoggedIn;
    const show = this.state.show;

    if (show && isLoggedIn) {
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

    let googleContent;
    if (this.state.isLoggedIn) {
      googleContent = (
        <div
          style={{
            width: "400px",
            margin: "auto",
            background: "#f4f4f4",
            padding: "20px"
          }}
        >
          <div>
            <GoogleLogout
              buttonText="Logout"
              onLogoutSuccess={this.logoutHandler}
            />
          </div>
          <img
            src={this.state.picture}
            alt={this.state.name}
            style={{ marginTop: "20px" }}
          />
          <br />
          <p>ID: {this.state.userID}</p>
          <h2>{this.state.name}</h2>
          Email: {this.state.email}
        </div>
      );
    } else {
      googleContent = (
        <GoogleLogin
          clientId="536969641773-30tao8nks47n0ijp46n924s52nocm179.apps.googleusercontent.com"
          buttonText="Login with Google"
          onSuccess={this.responseGoogle}
          onClick={this.componentClicked}
          onFailure={this.responseGoogle}
        />
      );
    }

    return (
      <div>
        <div>{googleContent}</div>

        <div>
          {this.state.isLoggedIn ? (
            <button
              type="button"
              style={{ marginTop: "20px" }}
              className="btn btn-success btn-lg"
              onClick={() => this.setState({ show: true })}
            >
              Rate Now
            </button>
          ) : null}

          {this.state.show ? (
            <div>
              your rating:
              {this.rateData}
            </div>
          ) : null}
        </div>
      </div>
    );
  }
}
