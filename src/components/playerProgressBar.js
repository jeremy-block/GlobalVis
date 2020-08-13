import React, { Component } from "react";

export default class PlayToggleButton extends Component {
    handleSeekMouseDown = e => {
        console.log(e)
        this.props.down(e)

    }
    
    handleSeekChange = (e) => {
        console.log(e)
        this.props.change(e);
    }

    handleSeekMouseUp = e =>{
        console.log(e)
        this.props.up(e)

    }
    render() {
        console.log('playerProgressBar',this.props)
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
            // onClick={()=> handleSeek(this)}  
            // onChange={()=>{this.handleChange.bind(this)}}
             />

        );
    }
}