import React from "react";

const FindRange = props => {
    const { target } = props;

    return <input type="range" min="0" max="255" onChange={target} />;
};

export default FindRange;
