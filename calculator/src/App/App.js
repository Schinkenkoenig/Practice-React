import "./App.css";
import React from "react";
import DigitButton from "../DigitButton/DigitButton";

const App = () => {
  return (
    <div id="app">
      <div id="calculator">
        <div id="output">
          <span>NaN</span>
        </div>
        <button id="clear">CLEAR</button>
        <button className="operator">DIV</button>
        <DigitButton digit={7} />
        <DigitButton digit={8} />
        <DigitButton digit={9} />

        <button className="operator">X</button>
        <DigitButton digit={4} />
        <DigitButton digit={5} />
        <DigitButton digit={6} />
        <button className="operator">-</button>
        <DigitButton digit={1} />
        <DigitButton digit={2} />
        <DigitButton digit={3} />
        <button className="operator">+</button>
        <button>+/-</button>
        <DigitButton digit={0} />
        <button>,</button>
        <button className="operator">=</button>
      </div>
    </div>
  );
};

export default App;
