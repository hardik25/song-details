import { combineReducers } from 'redux';

const songsReducer =  () => {
  return [
    { title: 'No Scrubs', duration: '4:15' },
    { title: 'Macarena', duration: '2:32' },
    { title: 'All Star', duration: '3:18' },
    { title: 'Shadow', duration: '6:32' }
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type == 'SONG_SELECTED') {
      return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});
