import React, { Component } from "react";

export default class PlayToggleButton extends Component {
    clicked(e) {
        this.props.onClick(e)
    }
    render() {
        return(
            (this.props.playing)?
            <svg onClick={this.clicked.bind(this)} style={
                {height: "24px"}
            } viewBox="0 0 24 24">
                <path fill="currentColor" d="M14,19H18V5H14M6,19H10V5H6V19Z" />
            </svg>:
            <svg onClick={this.clicked.bind(this)} style={
                {height: "24px"}
            } viewBox="0 0 24 24">
                <path fill="currentColor" d="M8,5.14V19.14L19,12.14L8,5.14Z" />
            </svg> 
        );
    }
}