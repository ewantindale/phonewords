import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h3>Phonewords Calculator</h3>
        <form>
          <input type="number" className="App-input" />
          <div>
            <button type="submit" className="App-submit">
              Generate Words
            </button>
          </div>
        </form>
      </header>
    </div>
  );
}

export default App;
