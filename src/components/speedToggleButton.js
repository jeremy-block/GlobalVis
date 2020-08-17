import React, { Component } from "react";

export default class PlayToggleButton extends Component {
    clicked(e) {
        this.props.onClick(e)
    }
    render() {
        var defaultStyle = {color:"white", cursor: "pointer"}
        var activeStyle =  {color:"blue", textShadow: "0px 0px 10px blue", cursor: "pointer"}
        return(
            (this.props.speed === 2 )?
            <span style={activeStyle} onClick={this.clicked.bind(this)} >2x</span>:
            <span style={defaultStyle} onClick={this.clicked.bind(this)}>2x</span>
        );
    }
}