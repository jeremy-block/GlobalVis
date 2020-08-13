import React, { Component } from 'react';
import PlayToggleButton from './playToggleButton'
import PlayerProgressBar from './playerProgressBar'
import "./player.css"

 
export default class PlayerControls extends Component{
    handleBtn(e){
        // console.log(e)
        this.props.playPause(e)
    }
    handleSeekDown = (t)=>{
        console.log(t)
        this.props.down(t)
    }
    handleSeekChange = (t)=>{
        console.log(t)
        this.props.change(t)
    }
    handleSeekUp = (t)=>{
        console.log(t)
        this.props.up(t)
    }
    
    render(){
        // console.log('playerControls',this.props)
        return (
            <div>
                <PlayToggleButton
                 playing={this.props.status.playing}
                 onClick = {this.handleBtn.bind(this)} />
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

