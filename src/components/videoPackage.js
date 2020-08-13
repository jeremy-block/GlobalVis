import React, { Component } from 'react';
import ReactPlayer from 'react-player';
import PlayerControls from './player-controls';


export default class VideoPackage extends Component{
    handleProgressUpdate= ()=>{
        console.log("Hi")
      }
    render() {
    return(   
        <div>
            <ReactPlayer 
                width='100%'
                height='100%'
                controls
                url='http://media.w3.org/2010/05/sintel/trailer.mp4'
                onProgress={this.handleProgressUpdate}/>
            <PlayerControls brand="fart" clicked="true"/>
          </div>
          );
    }
}