import React from "react";

function GuessList({ guesses }) {
  return (
    <div className="guess-results">
      {guesses.map(({ id, label }) => (
        <p key={id} className="guess">
          {label}
        </p>
      ))}
    </div>
  );
}

export default GuessList;
