import React, { Component } from "react";

export default class PlayToggleButton extends Component {
    clicked(e) {
        // console.log(e.target)
        this.props.onClick(e)
    }
    render() {
        // console.log('playButton:',this.props)
        return(
            (this.props.playing)?
            <button id="pause" onClick={this.clicked.bind(this)} >Stop!</button> :
            <button id="start" onClick={this.clicked.bind(this)} >Play!</button> 
        );
    }
}