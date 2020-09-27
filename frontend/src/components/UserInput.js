import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchResultsAsync } from "../features/phonewords/phonewordsSlice";
import { Numpad } from "./Numpad";
import styles from "./UserInput.module.css";

export const UserInput = () => {
  const dispatch = useDispatch();

  const [numericString, setNumericString] = useState("");
  const [useWordFilter, setUseWordFilter] = useState(false);

  const loading = useSelector((state) => state.phonewords.loading);
  const error = useSelector((state) => state.phonewords.error);

  return (
    <div className={styles.wrapper}>
      <div className={styles.input}>
        <div className={styles.inputField}>{numericString}</div>
        <div className={styles.error}>{error && error}</div>

        <Numpad setNumericString={setNumericString} dispatch={dispatch} />

        <button
          type="submit"
          className={styles.submit}
          disabled={loading}
          onClick={() =>
            dispatch(fetchResultsAsync(numericString, useWordFilter))
          }
        >
          Generate Words
        </button>

        <div className={styles.filter}>
          <input
            type="checkbox"
            name="filter"
            value={useWordFilter}
            onChange={() => setUseWordFilter((currentValue) => !currentValue)}
          />
          Filter by word list
        </div>
      </div>
    </div>
  );
};
