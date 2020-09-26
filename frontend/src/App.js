import React, { useState } from "react";
import axios from "axios";
import styles from "./App.module.css";

const App = () => {
  const [input, setInput] = useState("");
  const [filter, setFilter] = useState(false);
  const [results, setResults] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const submitForm = async (e) => {
    e.preventDefault();

    setResults([]);
    setError("");
    setLoading(true);

    try {
      const response = await axios({
        method: "post",
        url: "/",
        data: { numericString: input, filter: filter },
      });

      setResults(response.data);
    } catch (error) {
      setError(error.response.data.message);
    }

    setLoading(false);
  };

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleFilterChange = () => {
    setFilter((filter) => !filter);
  };

  return (
    <div>
      <header className={styles.header}>
        <h1>Phonewords</h1>
        <p className={styles.description}>
          Enter a string containing only digits between 2 and 9
        </p>

        <form onSubmit={submitForm}>
          <div>
            <input
              value={input}
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
              value={filter}
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
