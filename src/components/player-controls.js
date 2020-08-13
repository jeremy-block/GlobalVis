import React, { Component } from 'react';
import PlayToggleButton from './playToggleButton'
import PlayerProgressBar from './playerProgressBar'
import SpeedToggleButton from "./speedToggleButton";

 
export default class PlayerControls extends Component{
    handlePlayBtn(e){
        this.props.playPause(e)
    }
    handleSpeedBtn(e){
        this.props.toggleSpeed(e)
    }
    handleSeekDown = (t)=>{
        this.props.down(t)
    }
    handleSeekChange = (t)=>{
        this.props.change(t)
    }
    handleSeekUp = (t)=>{
        this.props.up(t)
    }
    
    render(){
        // console.log('playerControls',this.props)
        return (
            <div>
                <PlayToggleButton
                 playing={this.props.status.playing}
                 onClick = {this.handlePlayBtn.bind(this)} />
                <SpeedToggleButton 
                 speed={this.props.status.playbackRate}
                 onClick ={this.handleSpeedBtn.bind(this)} />
                <PlayerProgressBar
                played={this.props.status.played}
                down={this.handleSeekDown.bind(this)}
                change={this.handleSeekChange.bind(this)}
                up={this.handleSeekUp.bind(this)}
                 />
            </div>
        );
    }

}

