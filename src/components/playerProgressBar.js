import React, { Component } from "react";

export default class PlayToggleButton extends Component {
    handleSeekMouseDown = e => {
        this.props.down(e)

    }
    
    handleSeekChange = (e) => {
        this.props.change(e);
    }

    handleSeekMouseUp = e =>{
        this.props.up(e)

    }
    render() {
        return(
            <input 
            type="range" 
            min="0" 
            max="0.9999" 
            step="any" 
            value={this.props.played}
            onMouseDown={this.handleSeekMouseDown}
            onChange={this.handleSeekChange}
            onMouseUp={this.handleSeekMouseUp} 
             />

        );
    }
}