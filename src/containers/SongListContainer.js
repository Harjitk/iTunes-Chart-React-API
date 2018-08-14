import React from 'react';
import SongList from '../components/SongList';
import Song from '../components/Song';

class SongListContainer extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      songs: []

    }
  }

  componentDidMount(){
    fetch("https://itunes.apple.com/gb/rss/topsongs/limit=20/json")
    .then(responseText => responseText.json())
    // .then(songs => this.setState({songs: songs}));
    .then(songs => this.setState({songs: songs.feed.entry}))
  }


  render(){
    return (
      <React.Fragment>
        <h1>iTunes UK Top 20</h1>
        <SongList songs={this.state.songs}/>
      </React.Fragment>



    )
  }
}

export default SongListContainer;
