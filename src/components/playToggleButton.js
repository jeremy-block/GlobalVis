import React, { Component } from "react";

export default class PlayToggleButton extends Component {
    checkState(){
        console.log(this.props)
    }
    render() {
        console.log(this.props)
        return(
            (this.props.playing)?
            <button onClick={this.checkState}>Play!</button> :
            <button onClick={this.checkState}>Stop!</button> 
        );
    }
}