import React, { Component } from 'react';
import PlayToggleButton from './playToggleButton'
import "./player.css"

 
export default class PlayerControls extends Component{
      handleSeek = (t)=>{
        console.log(t)
    }
    render(){
        console.log(this.props)
        return (
            <div>
                <PlayToggleButton playing={false} />
                <input type="range" min="0" max="0.9999" step="any" defaultValue="0" onClick={()=> this.handleSeek(this)}  onChange={()=>{this.handleSeek(this)}} />
            </div>
        );
    }

}

