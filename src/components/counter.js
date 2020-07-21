import React, { Component } from "react";

export default class Counter extends Component {
    constructor() {
        super();

        this.state = {
            count: 0
        };
    }

    addToCount = num => {
        let counter = this.state.count + num;

        this.setState({
            count: counter
        });
    };

    render() {
        return (
            <div>
                <h2>{this.state.count}</h2>
                <button className="btns" onClick={() => this.addToCount(1)}>
                    Add
        </button>
                <button className="btns" onClick={() => this.addToCount(-1)}>
                    Sub
        </button>
            </div>
        );
    }
}
