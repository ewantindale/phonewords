import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./App.module.css";
import { Numpad } from "./components/Numpad";
import { Results } from "./components/Results";
import { fetchResultsAsync } from "./features/phonewords/phonewordsSlice";

const App = () => {
  const dispatch = useDispatch();

  const [numericString, setNumericString] = useState("");
  const [useWordFilter, setUseWordFilter] = useState(false);

  const loading = useSelector((state) => state.phonewords.loading);
  const error = useSelector((state) => state.phonewords.error);

  const handleFilterChange = () => {
    setUseWordFilter((useWordFilter) => !useWordFilter);
  };

  return (
    <div className={styles.app}>
      <h1>Phonewords</h1>
      <div className={styles.inputWrapper}>
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
              onChange={handleFilterChange}
            />
            Filter by word list
          </div>
        </div>
      </div>

      <Results />
    </div>
  );
};

export default App;
