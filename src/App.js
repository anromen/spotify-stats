import React, { Component } from "react";
import UserList from "./UserList";
import "./App.scss";

export const authEndpoint = "https://accounts.spotify.com/authorize";
const clientId = "cb1ca7c082da480d81d06ac3ad20b3d5";
const redirectUri = "http://localhost:3000";
const scopes = ["user-read-private", "user-top-read"];

const hash = window.location.hash
  .substring(1)
  .split("&")
  .reduce(function(initial, item) {
    if (item) {
      var parts = item.split("=");
      initial[parts[0]] = decodeURIComponent(parts[1]);
    }
    return initial;
  }, {});

window.location.hash = "";

class App extends Component {
  constructor() {
    super();
    this.state = {
      token: null
    };
  }

  componentDidMount() {
    let _token = hash.access_token;
    if (_token) {
      this.setState({
        token: _token
      });
    }
  }

  render() {
    return (
      <div className="App">
        {!this.state.token && (
          <a
            className="btn btn--loginApp-link"
            href={`${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
              "%20"
            )}&response_type=token&show_dialog=true`}
          >
            Login to Spotify
          </a>
        )}
        {this.state.token && <UserList />}
      </div>
    );
  }
}

export default App;
