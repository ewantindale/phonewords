import React, { useState } from "react";
import axios from "axios";
import "./App.css";

const App = () => {
  const [input, setInput] = useState("");
  const [results, setResults] = useState([]);
  const [error, setError] = useState("");

  const submitForm = async (e) => {
    try {
      const response = await axios({
        method: "post",
        url: "/",
        data: { numericString: input },
      });

      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h3>Phonewords Calculator</h3>
        <form onSubmit={submitForm}>
          <input
            value={input}
            onChange={handleInputChange}
            type="number"
            className="App-input"
          />
          <div>
            <button type="submit" className="App-submit">
              Generate Words
            </button>
          </div>
        </form>
      </header>
    </div>
  );
};

export default App;
