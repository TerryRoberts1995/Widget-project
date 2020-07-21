import React from "react";

export default class ToggleMe extends React.Component {
    constructor() {
        super();

        this.state = {
            hide: ""
        };
    }
    toggleText = view => {
        this.setState({
            hide: view
        });
    };

    render() {
        return (
            <div>
                <h1 style={{ display: this.state.hide }}>Howdy!</h1>
                <button className="btns" onClick={() => this.toggleText("none")}>
                    Hide
        </button>
                <button onClick={() => this.toggleText("block")}>Show</button>
            </div>
        );
    }
}
