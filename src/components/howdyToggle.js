import React, { Component } from "react";

export default class HowdyToggle extends Component {
    constructor() {
        super();

        this.state = {
            word: "Howdy"
        };
    }

    handleClick = () => {
        if (this.state.word !== "Howdy") {
            this.setState({
                word: "Howdy"
            });
        } else {
            this.setState({
                word: "Goodbye"
            });
        }
    };
    render() {
        return (
            <div>
                <h3>{this.state.word}</h3>
                <button className="btns" onClick={() => this.handleClick()}>
                    Submit
        </button>
            </div>
        );
    }
}
