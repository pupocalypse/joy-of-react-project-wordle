import React, { useState } from "react";
import Keyboard from "../Keyboard/Keyboard";

function GuessInput({ handleSubmitGuess, isDisabled }) {
  const [guess, setGuess] = useState("");

  const [keysStatus, setKeysStatus] = useState({
    correct: new Set(),
    misplaced: new Set(),
    incorrect: new Set(),
  });

  const handleSubmit = () => {
    const success = handleSubmitGuess(guess);

    if (success) {
      setGuess("");

      const newKeysStatus = structuredClone(keysStatus);

      for (const key of success[success.length - 1]) {
        newKeysStatus[key.status].add(key.letter);
      }

      setKeysStatus(newKeysStatus);
    }
  };

  const handleKeyboardPress = (key) => {
    // submit if 'enter key' is pressed
    if (key === "⏎") {
      handleSubmit();
      return;
    }

    // update guess if 'delete key' is pressed
    if (key === "⌫") {
      setGuess(guess.slice(0, guess.length - 1));
      return;
    }

    // allow updating the guess if we haven't reached the character limit
    if (guess.length < 5) {
      setGuess(`${guess}${key}`);
    }
  };

  return (
    <>
      <form
        className="guess-input-wrapper"
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
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

      <Keyboard
        keysStatus={keysStatus}
        handleKeyboardPress={handleKeyboardPress}
      />
    </>
  );
}

export default GuessInput;
