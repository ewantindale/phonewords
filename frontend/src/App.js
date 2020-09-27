import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./App.module.css";
import {
  fetchResultsAsync,
  setNumericString,
  toggleFilter,
} from "./features/phonewords/phonewordsSlice";

const App = () => {
  const dispatch = useDispatch();

  const [numericString, setNumericString] = useState("");
  const [useWordFilter, setUseWordFilter] = useState(false);

  const results = useSelector((state) => state.phonewords.results);
  const loading = useSelector((state) => state.phonewords.loading);
  const error = useSelector((state) => state.phonewords.error);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchResultsAsync(numericString, useWordFilter));
  };

  const handleInputChange = (e) => {
    setNumericString(e.target.value);
  };

  const handleFilterChange = () => {
    setUseWordFilter((useWordFilter) => !useWordFilter);
  };

  return (
    <div>
      <header className={styles.header}>
        <h1>Phonewords</h1>
        <p className={styles.description}>
          Enter a string containing only digits between 2 and 9
        </p>

        <form onSubmit={handleFormSubmit}>
          <div>
            <input
              value={numericString}
              onChange={handleInputChange}
              type="text"
              className={styles.input}
              placeholder="e.g. 23"
            />
            <button type="submit" className={styles.submit} disabled={loading}>
              Generate Words
            </button>
          </div>
          <div className={styles.filter}>
            <input
              type="checkbox"
              name="filter"
              value={useWordFilter}
              onChange={handleFilterChange}
            />
            Filter by word list
          </div>
        </form>

        {error && <div className={styles.error}>Error: {error}</div>}

        <div className={styles.resultsWrapper}>
          <h2>Results: </h2>
          {loading && (
            <div className={styles.spinnerWrapper}>
              <div className={styles.spinner}></div>
            </div>
          )}
          {results && results.length > 0 && (
            <div className={styles.results}>
              {results.map((r, i) => (
                <div key={i} className={styles.word}>
                  {r}
                </div>
              ))}
            </div>
          )}
        </div>
      </header>
    </div>
  );
};

export default App;
