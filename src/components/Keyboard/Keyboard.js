import React from "react";

function Keyboard({ keysStatus, handleKeyboardPress }) {
  const keyboard = [
    ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
    ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
    ["⌫", "Z", "X", "C", "V", "B", "N", "M", "⏎"],
  ];

  return (
    <div className="keyboard">
      {keyboard.map((row, index) => (
        <div key={index} className="keyboard-row">
          {row.map((char) => (
            <button
              key={char}
              className={`key ${
                keysStatus.correct.has(char)
                  ? "correct"
                  : keysStatus.misplaced.has(char)
                  ? "misplaced"
                  : keysStatus.incorrect.has(char)
                  ? "incorrect"
                  : char === "⌫"
                  ? "backspace"
                  : char === "⏎"
                  ? "enter"
                  : ""
              }`}
              onClick={() => handleKeyboardPress(char)}
            >
              {char}
            </button>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Keyboard;
