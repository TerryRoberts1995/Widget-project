import React from "react";

export default class MoveText extends React.Component {
    constructor() {
        super();

        this.state = {
            align: ""
        };
    }

    handleMove = style => {
        this.setState({
            align: style
        });
    };

    render() {
        return (
            <div className="container">
                <h1 className="test" style={{ textAlign: this.state.align }}>
                    hello
        </h1>

                <div className="button-wrapper">
                    <button className="btns" onClick={() => this.handleMove("left")}>
                        left
          </button>
                    <button className="btns" onClick={() => this.handleMove("center")}>
                        center
          </button>
                    <button className="btns" onClick={() => this.handleMove("right")}>
                        Right
          </button>
                </div>
            </div>
        );
    }
}
