import React, { useState } from "react";
import axios from "axios";
import "./App.css";

const App = () => {
  const [input, setInput] = useState("");
  const [results, setResults] = useState([]);
  const [error, setError] = useState("");

  const submitForm = async (e) => {
    e.preventDefault();

    setResults([]);
    setError("");

    try {
      const response = await axios({
        method: "post",
        url: "/",
        data: { numericString: input },
      });

      setResults(response.data);
    } catch (error) {
      setError(error.response.data.message);
    }
  };

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Phonewords Calculator</h1>
        <p>Enter a string containing only numbers between 2 and 9</p>
        <form onSubmit={submitForm}>
          <input
            value={input}
            onChange={handleInputChange}
            type="text"
            className="App-input"
          />
          <div>
            <button type="submit" className="App-submit">
              Generate Words
            </button>
          </div>
        </form>
        {error && <div className="App-error">Error: {error}</div>}
        {results && results.length > 0 && (
          <div className="App-results">
            <h2>Results: </h2>
            {results.map((r, index) => r + " ")}
          </div>
        )}
      </header>
    </div>
  );
};

export default App;
