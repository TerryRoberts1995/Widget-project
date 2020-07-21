import React from "react";
import "./styles.css";

import Counter from "./components/counter";
import ToggleMe from "./components/toggleMe";
import MoveText from "./components/moveText";
import Rgb from "./components/rgb";
import HowdyToggle from "./components/howdyToggle";
import ColorChange from "./components/colorButton";
import Pixel from "./components/pixelSize";
import Time from "./components/time";

export default function App() {
  return (
    <div className="App">
      <h1>React Magic</h1>

      <Counter />

      <br />

      <ToggleMe />

      <br />

      <MoveText />

      <br />

      <Rgb />

      <br />

      <HowdyToggle />

      <br />

      <ColorChange />

      <br />

      <Pixel />

      <br />

      <Time />
    </div>
  );
}
