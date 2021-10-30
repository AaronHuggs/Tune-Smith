
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
          id: 1,
          uri: 'spotify:track:6gCVA6ja6g0foIsWv0RuSZ'
        },
        {
          name: 'Toxicity',
          artist: 'System of a Down',
          album: 'Toxicity',
          id: 2,
          uri: 'spotify:track:0snQkGI5qnAmohLE7jTsTn'
        },
        {
          name: 'Psycho',
          artist: 'System of a Down',
          album: 'Toxicity',
          id: 3,
          uri: 'spotify:track:6VzV6RI7641o57TuqfGRpj'
        }
      ],
      playlistName: 'Cool Tunes',
      playlistTracks: [
        {
          name: 'First Kill',
          artist: 'Amon Amarth',
          album: 'Jomsviking',
          id: 4,
          uri: 'spotify:track:7wVdKwd0CZkzLT2cRcTSqz'
        },
        {
          name: 'Buzzin',
          artist: 'Alina Baraz',
          album: 'Buzzin',
          id: 5,
          uri: 'spotify:track:6WUgEQwCbnaPrLf9V5K4HG'
        },
        {
          name: 'Spirit Crusher',
          artist: 'Death',
          album: 'The Sound of Perseverance',
          id: 6,
          uri: 'spotify:track:3sSonVXqDeoEFj2lM7mpYT'
        }
      ],
    }

    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    this.search = this.search.bind(this);
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

  savePlaylist() {
    let trackURIs = [];
    this.state.playlistTracks.forEach(track => trackURIs.push(track.uri))
    console.log(trackURIs);
    
  }

  search(term) {
    console.log(term);
  }

  render() {
    return (
      <div>
        <h1><span className="highlight">Tune</span>smith</h1>
        <div className="App">
          <SearchBar onSearch = {this.search}/>
          <div className="App-playlist">
            <SearchResults 
              searchResults = {this.state.searchResults}
              onAdd = {this.addTrack}
            />
            <Playlist 
              playlistName = {this.state.playlistName}
              playlistTracks = {this.state.playlistTracks}
              onRemove = {this.removeTrack}
              onNameChange = {this.updatePlaylistName}
              onSave = {this.savePlaylist}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default App;

