import React, { useState } from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";

import GuessInput from "../GuessInput/GuessInput";
import GuessList from "../GuessList/GuessList";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { checkGuess } from "../../game-helpers";
import Banner from "../Banner/Banner";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [turn, setTurn] = useState(1);
  const [guesses, setGuesses] = useState([]);
  const [youWon, setYouWon] = useState(false);

  const maxTurnsReached = turn > NUM_OF_GUESSES_ALLOWED;

  const handleSubmitGuess = (guess) => {
    // disallow non-word characters, eg. numbers, hyphens, periods...
    if (/[\W\d]+/.test(guess)) {
      window.alert(
        "Your guess may not include any numbers or special characters. Please enter a 5-letter word."
      );
      return;
    }

    // TODO: check word against dictionary? :)

    // don't submit guesses that are less than 5 letters
    if (guess.length < 5) {
      window.alert("You must guess a 5-letter word.");
      return;
    }

    if (guesses.includes(guess)) {
      window.alert(
        `You've already guessed ${guess}, please pick another word.`
      );
      return;
    }

    const guessStatus = checkGuess(guess, answer);

    if (guessStatus.every((char) => char.status === "correct")) {
      setYouWon(true);
    }

    const newGuesses = [...guesses, guessStatus];
    setGuesses(newGuesses);
    setTurn(turn + 1);

    return newGuesses;
  };

  return (
    <>
      <GuessList guesses={guesses} />
      {(maxTurnsReached || youWon) && (
        <Banner guessCount={turn - 1} answer={answer} />
      )}
      <GuessInput
        handleSubmitGuess={handleSubmitGuess}
        isDisabled={maxTurnsReached || youWon}
      />
    </>
  );
}

export default Game;
