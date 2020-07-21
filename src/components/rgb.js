import React, { Component } from "react";
import FindRange from "./range-slider";

export default class Rgb extends Component {
    constructor() {
        super();

        this.state = {
            value: 1,
            value2: 2,
            value3: 3
        };
    }
    handleRange = (event, value) => {
        if (value === "value") {
            this.setState({
                value: event.target.value
            });
        } else if (value === "value2") {
            this.setState({
                value2: event.target.value
            });
        } else {
            this.setState({
                value3: event.target.value
            });
        }
    };
    render() {
        let rgbColor = `rgb(${this.state.value},${this.state.value2}, ${
            this.state.value3
            })`;
        return (
            <div>
                <h4 style={{ backgroundColor: rgbColor }}>
                    rgb({this.state.value}, {this.state.value2}, {this.state.value3})
        </h4>

                <div>
                    <FindRange target={event => this.handleRange(event, "value")} />
                    <FindRange target={event => this.handleRange(event, "value2")} />
                    <FindRange target={event => this.handleRange(event, "value3")} />
                </div>
            </div>
        );
    }
}
