import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./App.module.css";
import { Word } from "./components/Word/Word";
import { Numpad } from "./components/Numpad/Numpad";
import { fetchResultsAsync } from "./features/phonewords/phonewordsSlice";

const App = () => {
  const dispatch = useDispatch();

  const [numericString, setNumericString] = useState("");
  const [useWordFilter, setUseWordFilter] = useState(false);

  const results = useSelector((state) => state.phonewords.results);
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
          <div className={styles.numericString}>{numericString}</div>
          <div className={styles.error}>{error && error}</div>

          <Numpad setNumericString={setNumericString} />

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

      <div className={styles.resultsWrapper}>
        <h2>Results</h2>
        {loading && (
          <div className={styles.spinnerWrapper}>
            <div className={styles.spinner}></div>
          </div>
        )}
        {results && results.length > 0 && (
          <div className={styles.results}>
            {results.map((r, i) => (
              <Word key={i} value={r} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
