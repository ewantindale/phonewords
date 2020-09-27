import React from "react";
import styles from "./Numpad.module.css";

export const Numpad = ({ setNumericString }) => {
  const numpadKeys = {
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz",
    10: "CLEAR",
  };

  return (
    <div className={styles.numpad}>
      {Object.keys(numpadKeys).map((num) => (
        <button
          key={num}
          className={styles.button}
          onClick={
            num < 10
              ? () => setNumericString((v) => v + num)
              : () => setNumericString("")
          }
          name={num}
        >
          {num < 10 ? <span className={styles.number}>{num}</span> : null}

          <span className={styles.letters}>{numpadKeys[num]}</span>
        </button>
      ))}
    </div>
  );
};
