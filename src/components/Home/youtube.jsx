import React from 'react';
import YouTube from 'react-youtube';

class CustomYoutube extends React.Component {
  constructor(props){
    super(props)
  }
  
  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }

  
  _onPlay( event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
    console.log(this.props)
    this.props.onPlay()
  }
  render() {
    const opts = {
      height: '390',
      width: '-webkit-fill-available',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
      },
    };
    console.log(this.props)
    return <YouTube videoId={this.props.url} opts={opts} onReady={this._onReady} onPlay={this.props.onPlay && this._onPlay.bind(this)}/>;
  }
}

export default CustomYoutube;