import React, { Component } from 'react';
import ReactPlayer from 'react-player';
import PlayerControls from './player-controls';

//todo add more comments to describe what's happening

export default class VideoPackage extends Component{
    constructor(){
        super();
        this.state={
            url: 'http://media.w3.org/2010/05/sintel/trailer.mp4',
            playing: false,
            light: false,
            volume: 0.8,
            muted: false,
            played: 0,
            loaded: 0,
            duration: 0,
            playbackRate: 1.0,
            loop: false
        };
    }
    load = url => {
        this.setState({
          url,
          played: 0,
          loaded: 0,
        })
    }

    handleVolumeChange = e => {
      this.setState({ volume: parseFloat(e.target.value) })
    }
    handleToggleMuted = () => {
      this.setState({ muted: !this.state.muted })
    }
    handleSetPlaybackRate = e => {
      this.setState( {
          playbackRate: (this.state.playbackRate === 1)? 2 : 1
      })
      console.log(this.state)
    //   this.setState({ playbackRate: parseFloat(e.target.value) })
    }
    handlePlayPause = () => {
      this.setState({ playing: !this.state.playing })
    }
    handlePlay = () => {
      console.log('onPlay')
      this.setState({ playing: true })
    }
    handlePause = () => {
      console.log('onPause')
      this.setState({ playing: false })
    }
    handleSeekMouseDown = e => {
      this.setState({ seeking: true })
    }

    handleSeekChange = e => {
      this.setState({ played: parseFloat(e.target.value) })
    }

    handleSeekMouseUp = e => {
      this.setState({ seeking: false })
      this.player.seekTo(parseFloat(e.target.value))
    }
    handleProgress = state => {
    //   console.log('onProgress', state)
      // We only want to update time slider if we are not currently seeking
      if (!this.state.seeking) {
        this.setState(state)
      }
    }
    handleEnded = () => {
      console.log('onEnded')
      this.setState({ playing: this.state.loop })
    }

    handleDuration = (duration) => {
      console.log('onDuration', duration)
      this.setState({ duration })
    }
    handleStop = () => {
        this.setState({ url: null, playing: false })
    }
    ref = player => {
        this.player = player
    }

    render() {
    return(   
      <div>
        <ReactPlayer 
            ref={this.ref}
            className='react-player'
            width='100%'
            height='100%'
            url={this.state.url}
            playing={this.state.playing}
            light={this.state.light}
            loop={this.state.loop}
            playbackRate={this.state.playbackRate}
            volume={this.state.volume}
            muted={this.state.muted}
            onReady={() => console.log('onReady')}
            onStart={() => console.log('onStart')}
            onPlay={this.handlePlay}
            onPause={this.handlePause}
            onSeek={e => console.log('onSeek', e)}
            onEnded={this.handleEnded}
            onError={e => console.log('onError', e)}
            onProgress={this.handleProgress}
            onDuration={this.handleDuration}/>
        <PlayerControls 
            playPause = {this.handlePlayPause.bind(this)}
            toggleSpeed = {this.handleSetPlaybackRate.bind(this)}
            down={this.handleSeekMouseDown.bind(this)}
            change={this.handleSeekChange.bind(this)}
            up={this.handleSeekMouseUp.bind(this)}
            status={this.state}/>
      </div>
    );
  }
}