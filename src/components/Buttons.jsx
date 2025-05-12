import React from "react";

const Buttons = ({ onButtonClick }) => {
  const buttons = [
    "7", "8", "9", "/",
    "4", "5", "6", "*",
    "1", "2", "3", "-",
    "0", ".", "=", "+",
    "±", "⌫", "AC"
  ];

  return (
    <div className="buttons">
      {buttons.map((btn) => (
        <button key={btn} onClick={() => onButtonClick(btn)}>
          {btn}
        </button>
      ))}
    </div>
  );
};

export default Buttons;