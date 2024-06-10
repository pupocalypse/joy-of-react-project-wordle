import React from "react";
import { range } from "../../utils";

function Guess({ guess }) {
  const cellRange = range(0, 5);

  return (
    <p className="guess">
      {cellRange.map((cellIndex) => (
        <span
          className={
            guess?.[cellIndex] ? `cell ${guess[cellIndex].status}` : "cell"
          }
        >
          {guess?.[cellIndex].letter}
        </span>
      ))}
    </p>
  );
}

export default Guess;
