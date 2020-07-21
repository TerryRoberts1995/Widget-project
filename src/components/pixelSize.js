import React, { Component } from "react";

export default class Pixel extends Component {
    constructor() {
        super();

        this.state = {
            size: 10
        };
    }

    handleSize = num => {
        let sum = this.state.size + num;

        this.setState({
            size: sum
        });
    };

    render() {
        let alteredSize = `${this.state.size}px`;
        return (
            <div>
                <div style={{ fontSize: alteredSize }}>{this.state.size}px</div>

                <button className="btns" onClick={() => this.handleSize(1)}>
                    Bigger
        </button>
                <button className="btns" onClick={() => this.handleSize(-1)}>
                    Smaller
        </button>
            </div>
        );
    }
}
