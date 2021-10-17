import React from 'react';
import './Tracklist.css';
import Track from '../Track/Track';

class Tracklist extends React.Component {
  render() {
    return (
      <div className="TrackList">
          {
            this.props.tracks.map(track => {
              return <Track track={track}
                            key={track.id}
                            onAdd={this.props.onAdd} 
                            onRemoval={this.props.onRemove}
                            isRemoval={this.props.isRemoval} />
            })
          }
      </div>
    );
  }
}

export default Tracklist;