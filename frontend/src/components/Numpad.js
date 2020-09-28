import React from "react";
import styles from "./Numpad.module.css";
import { clear } from "../phonewordsSlice";

const numpadKeys = {
  2: "abc",
  3: "def",
  4: "ghi",
  5: "jkl",
  6: "mno",
  7: "pqrs",
  8: "tuv",
  9: "wxyz",
};

export const Numpad = ({ dispatch, setNumericString }) => {
  const handleClearButtonClick = () => {
    dispatch(clear());
    setNumericString("");
  };

  return (
    <div className={styles.numpad}>
      {Object.keys(numpadKeys).map((num) => (
        <button
          key={num}
          className={styles.button}
          onClick={() => setNumericString((v) => v + num)}
          name={num}
        >
          <span className={styles.number}>{num}</span>

          <span className={styles.letters}>{numpadKeys[num]}</span>
        </button>
      ))}
      <button className={styles.button} onClick={handleClearButtonClick}>
        <span className={styles.clearText}>CLEAR</span>
      </button>
    </div>
  );
};
