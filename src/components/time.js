import React, { Component } from "react";
import Moment from "moment";

export default class Time extends Component {
    constructor() {
        super();
        this.state = {
            time: 0
        };
    }
    componentDidMount() {
        setInterval(
            () =>
                this.setState({
                    time: Moment().format("MMMM Do YYYY, h:mm:ss a")
                }),
            1000
        );
    }
    render() {
        return <div>{this.state.time}</div>;
    }
}
