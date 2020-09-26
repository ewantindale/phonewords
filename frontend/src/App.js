import React, { useState } from "react";
import axios from "axios";
import "./App.css";

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
    <div className="App">
      <header className="App-header">
        <h1>Phonewords</h1>
        <p className="App-description">
          Enter a string containing only digits between 2 and 9
        </p>

        <form onSubmit={submitForm}>
          <input
            value={input}
            onChange={handleInputChange}
            type="text"
            className="App-input"
            placeholder="e.g. 23"
          />
          <div className="App-filter">
            <input
              type="checkbox"
              name="filter"
              value={filter}
              onChange={handleFilterChange}
            />
            Filter by word list
          </div>

          <div>
            <button type="submit" className="App-submit" disabled={loading}>
              Generate Words
            </button>
          </div>
        </form>

        {error && <div className="App-error">Error: {error}</div>}

        <div className="App-results-wrapper">
          <h2>Results: </h2>
          {loading && (
            <div className="App-spinner-wrapper">
              <div className="App-spinner"></div>
            </div>
          )}
          {results && results.length > 0 && (
            <div className="App-results">
              {results.map((r, i) => (
                <div key={i} className="word">
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
