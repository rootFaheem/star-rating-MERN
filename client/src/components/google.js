import GoogleLogin from "react-google-login";

import React, { Component } from "react";

export default class google extends Component {
  state = {
    isLoggedIn: false,
    userID: "",
    name: "",
    email: ""
  };

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

  render() {
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
          <img src={this.state.picture} alt={this.state.name} />
          <p>ID: {this.state.userID}</p>
          <h2>Welcome {this.state.name}</h2>
          Email: {this.state.email}
        </div>
      );
    } else {
      googleContent = (
        <GoogleLogin
          clientId="536969641773-30tao8nks47n0ijp46n924s52nocm179.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={this.responseGoogle}
          onClick={this.componentClicked}
          onFailure={this.responseGoogle}
        />
      );
    }

    return <div>{googleContent}</div>;
  }
}
