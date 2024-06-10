import React from "react";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

function Banner({ guessCount, answer }) {
  const success = guessCount < NUM_OF_GUESSES_ALLOWED;

  return (
    <div className={`banner ${success ? "happy" : "sad"}`}>
      <p>
        {success ? (
          <>
            <strong>Congratulations!</strong> Got it in{" "}
            <strong>
              {guessCount} {guessCount === 1 ? "guess" : "guesses"}
            </strong>
            .
          </>
        ) : (
          <>
            <p>
              Sorry, the correct answer is <strong>{answer}</strong>.
            </p>
          </>
        )}
      </p>
    </div>
  );
}

export default Banner;
