import React from "react";
import styles from "./Numpad.module.css";
import { clear } from "../features/phonewords/phonewordsSlice";

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

export const Numpad = ({ setNumericString, dispatch }) => {
  return (
    <div className={styles.numpad}>
      {Object.keys(numpadKeys).map((num) => (
        <button
          key={num}
          className={styles.button}
          onClick={
            num < 10
              ? () => setNumericString((v) => v + num)
              : () => {
                  setNumericString("");
                  dispatch(clear());
                }
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
