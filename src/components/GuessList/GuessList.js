import React from "react";
import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import Guess from "../Guess/Guess";

function GuessList({ guesses }) {
  const gridRange = range(0, NUM_OF_GUESSES_ALLOWED);

  return (
    <div className="guess-results">
      {gridRange.map((rowIndex) => (
        <Guess key={rowIndex} guess={guesses[rowIndex]} />
      ))}
    </div>
  );
}

export default GuessList;
