import React from 'react';
import { connect } from 'react-redux';

const SongDetail = ({ selectedSong }) => {
  if (!selectedSong) {
    return <div>Please select a song for details.</div>
  }
  return (
    <div className="ui card">
      <h3 class="header"> Details for song: {selectedSong.title}</h3>


      <p class="content">
        Duration: {selectedSong.duration}
      </p>
    </div>
  );
}


const mapStateToProps = (state) => {
      return {
        selectedSong: state.selectedSong
      };
}

export default connect(mapStateToProps)(SongDetail);
