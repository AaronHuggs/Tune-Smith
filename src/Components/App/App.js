
import React from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [
        {
          name: 'ATWA',
          artist: 'System of a Down',
          album: 'Toxicity',
          id: 1
        },
        {
          name: 'Toxicity',
          artist: 'System of a Down',
          album: 'Toxicity',
          id: 2
        },
        {
          name: 'Psycho',
          artist: 'System of a Down',
          album: 'Toxicity',
          id: 3
        }
      ],
      playlistName: 'Cool Tunes',
      playlistTracks: [
        {
          name: 'First Kill',
          artist: 'Amon Amarth',
          album: 'Jomsviking',
          id: 4
        },
        {
          name: 'Buzzin',
          artist: 'Alina Baraz',
          album: 'Buzzin',
          id: 5
        },
        {
          name: 'Spirit Crusher',
          artist: 'Death',
          album: 'The Sound of Perseverance',
          id: 6
        }
      ],
    }

    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
  }

  addTrack(track) {
    let newPlaylistTracks = this.state.playlistTracks;
    if (newPlaylistTracks.find(savedTrack => savedTrack.id === track.id)) {
      return;
    } 
    newPlaylistTracks.push(track);
    this.setState({
      playlistTracks: newPlaylistTracks
    })
  }

  removeTrack(track) {
    let newPlaylistTracks;
    if (this.state.playlistTracks.find(savedTrack => savedTrack.id === track.id)) {
      newPlaylistTracks = this.state.playlistTracks.filter(savedTrack => savedTrack.id !== track.id);
    }
    else {
      return;
    }
    this.setState({
      playlistTracks: newPlaylistTracks
    })
  }

  updatePlaylistName(name) {
    this.setState({
      playlistName: name
    })
  }


  render() {
    return (
      <div>
        <h1><span className="highlight">Tune</span>smith</h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
            <SearchResults 
              searchResults = {this.state.searchResults}
              onAdd = {this.addTrack}
            />
            <Playlist 
              playlistName = {this.state.playlistName}
              playlistTracks = {this.state.playlistTracks}
              onAdd = {this.addTrack}
              onRemove = {this.removeTrack}
              onNameChange = {this.updatePlaylistName}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default App;

