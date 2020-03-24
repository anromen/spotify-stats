import React, { Component } from "react";
import "./App.scss";

function ListedSong(props) {
  return (
    <li>
      <div className="song">
        <img
          src={props.item.album.images[2].url}
          alt="cover"
          className="cover"
        />
        <h3>{props.item.name}</h3>
        <small>
          {props.item.album.name} -
          {props.item.artists.map(artist => artist.name).join(", ")}
        </small>
      </div>
    </li>
  );
}

function ListedArtist(props) {
  return (
    <li>
      <div className="artist">
        <img src="img/artist.jpg" alt="artist" />
        <div></div>
      </div>
    </li>
  );
}

function OrderedList(props) {
  const items = props.items.map(item => {
    if (props.type === "tracks") {
      return <ListedSong key={item.name} item={item} />;
    }
    return <ListedArtist key={item.name} />;
  });

  return <ol>{items}</ol>;
}

class UserList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      token: props.token,
      tracks: [],
      artists: []
    };
  }

  componentDidMount() {
    fetch("https://api.spotify.com/v1/me/top/tracks?limit=10", {
      method: "get",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + this.state.token
      }
    })
      .then(response => response.json())
      .then(data => {
        this.setState({ tracks: data.items });
        console.log(data.items);
      })
      .catch(function(err) {
        console.log("Fetch Error :-S", err);
      });

    fetch("https://api.spotify.com/v1/me/top/artists?limit=10", {
      method: "get",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + this.state.token
      }
    })
      .then(response => response.json())
      .then(data => {
        this.setState({ artists: data.items });
        console.log(data.items);
      })
      .catch(function(err) {
        console.log("Fetch Error :-S", err);
      });
  }

  render() {
    return (
      <React.Fragment>
        <div className="float">
          <h1>TOP</h1>
        </div>
        <div className="column-3 solid">
          <h2>SONGS</h2>
          <OrderedList items={this.state.tracks} type="tracks" />
        </div>
        <div className="column-3 vertical">
          <h2>ARTISTS</h2>
          <OrderedList items={this.state.artists} type="artists" />
        </div>
        <div className="column-3 profile">
          <img src="img/profile.jpeg" alt="profile" />
        </div>
      </React.Fragment>
    );
  }
}

export default UserList;
