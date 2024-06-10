import React from "react";
import { range } from "../../utils";

function Guess({ guess }) {
  const cellRange = range(0, 5);

  return (
    <p className="guess">
      {cellRange.map((cellIndex) => (
        <span className="cell">{guess?.[cellIndex]}</span>
      ))}
    </p>
  );
}

export default Guess;
