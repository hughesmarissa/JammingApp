import React from 'react';
import './Playlist.css';
import Tracklist from '../Tracklist/Tracklist';

class Playlist extends React.Component {
  render() {
    return (
      <div class="Playlist">
        <input value="New Playlist"/>
        <Tracklist tracks={this.props.playlistTracks}/>
        <button class="Playlist-save">SAVE TO SPOTIFY</button>
      </div>
    );
  }
}

export default Playlist;