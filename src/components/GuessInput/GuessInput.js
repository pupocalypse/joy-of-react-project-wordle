import React, { useState } from "react";

function GuessInput({ handleSubmitGuess, isDisabled }) {
  const [guess, setGuess] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const success = handleSubmitGuess(guess);

    if (success) {
      setGuess("");
    }
  };

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={guess}
        onChange={(e) => setGuess(e.target.value.toUpperCase())}
        minLength={5}
        maxLength={5}
        disabled={isDisabled}
      />
    </form>
  );
}

export default GuessInput;
