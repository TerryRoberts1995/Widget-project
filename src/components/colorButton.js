import React, { Component } from "react";

export default class ColorChange extends Component {
    constructor() {
        super();

        this.state = {
            color: "Black"
        };
    }

    handleColor = event => {
        this.setState({
            color: event.target.value
        });
    };
    render() {
        return (
            <div>
                <h2 style={{ color: this.state.color }}>{this.state.color}</h2>
                <input
                    type="text"
                    placeholder={this.state.color}
                    onChange={event => this.handleColor(event)}
                />
            </div>
        );
    }
}
