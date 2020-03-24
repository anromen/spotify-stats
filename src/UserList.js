import React from "react";
import "./App.scss";

function Song() {
  return (
    <div className="song">
      <img src="img/cover.jpg" alt="cover" className="cover" />
      <h3>El mundo sigue girando</h3>
      <small>Energía - El Chojin</small>
    </div>
  );
}

function OrderedList(props) {
  const items = props.items.map(item => (
    <li>
      <Song />
    </li>
  ));

  return <ol>{items}</ol>;
}

function UserList(props) {
  return (
    <React.Fragment>
      <div className="float">
        <h1>TOP</h1>
      </div>
      <div className="column-3 solid">
        <h2>SONGS</h2>
        <OrderedList items={props.tracks} />

        {/* <ol>
          <li>
            <div className="song first">
              <img src="img/cover.jpg" alt="cover" className="cover" />
              <h3>El mundo sigue girando</h3>
              <small>Energía - El Chojin</small>
            </div>
          </li>
          <li>
            <div className="song">
              <img src="img/cover.jpg" alt="cover" className="cover" />
              <h3>El mundo sigue girando</h3>
              <small>Energía - El Chojin</small>
            </div>
          </li>
          <li>
            <div className="song">
              <img src="img/cover.jpg" alt="cover" className="cover" />
              <h3>El mundo sigue girando</h3>
              <small>Energía - El Chojin</small>
            </div>
          </li>
          <li>
            <div className="song">
              <img src="img/cover.jpg" alt="cover" className="cover" />
              <h3>El mundo sigue girando</h3>
              <small>Energía - El Chojin</small>
            </div>
          </li>
          <li>
            <div className="song">
              <img src="img/cover.jpg" alt="cover" className="cover" />
              <h3>El mundo sigue girando</h3>
              <small>Energía - El Chojin</small>
            </div>
          </li>
          <li>
            <div className="song">
              <img src="img/cover.jpg" alt="cover" className="cover" />
              <h3>El mundo sigue girando</h3>
              <small>Energía - El Chojin</small>
            </div>
          </li>
          <li>
            <div className="song">
              <img src="img/cover.jpg" alt="cover" className="cover" />
              <h3>El mundo sigue girando</h3>
              <small>Energía - El Chojin</small>
            </div>
          </li>
          <li>
            <div className="song">
              <img src="img/cover.jpg" alt="cover" className="cover" />
              <h3>El mundo sigue girando</h3>
              <small>Energía - El Chojin</small>
            </div>
          </li>
          <li>
            <div className="song">
              <img src="img/cover.jpg" alt="cover" className="cover" />
              <h3>El mundo sigue girando</h3>
              <small>Energía - El Chojin</small>
            </div>
          </li>
          <li>
            <div className="song">
              <img src="img/cover.jpg" alt="cover" className="cover" />
              <h3>El mundo sigue girando</h3>
              <small>Energía - El Chojin</small>
            </div>
          </li>
        </ol> */}
      </div>
      <div className="column-3 vertical">
        <h2>ARTISTS</h2>
        <ol>
          <li>
            <div className="artist">
              <img src="img/artist.jpg" alt="artist" />
              <div></div>
            </div>
          </li>
          <li>
            <div className="artist">
              <img src="img/artist.jpg" alt="artist" />
              <div></div>
            </div>
          </li>
          <li>
            <div className="artist">
              <img src="img/artist.jpg" alt="artist" />
              <div></div>
            </div>
          </li>
          <li>
            <div className="artist">
              <img src="img/artist.jpg" alt="artist" />
              <div></div>
            </div>
          </li>
          <li>
            <div className="artist">
              <img src="img/artist.jpg" alt="artist" />
              <div></div>
            </div>
          </li>
          <li>
            <div className="artist">
              <img src="img/artist.jpg" alt="artist" />
              <div></div>
            </div>
          </li>
          <li>
            <div className="artist">
              <img src="img/artist.jpg" alt="artist" />
              <div></div>
            </div>
          </li>
          <li>
            <div className="artist">
              <img src="img/artist.jpg" alt="artist" />
              <div></div>
            </div>
          </li>
          <li>
            <div className="artist">
              <img src="img/artist.jpg" alt="artist" />
              <div></div>
            </div>
          </li>
          <li>
            <div className="artist">
              <img src="img/artist.jpg" alt="artist" />
              <div></div>
            </div>
          </li>
        </ol>
      </div>
      <div className="column-3 profile">
        <img src="img/profile.jpeg" alt="profile" />
      </div>
    </React.Fragment>
  );
}

export default UserList;
