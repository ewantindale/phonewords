import React from "react";
import styles from "./App.module.css";
import { Results } from "./components/Results";
import { UserInput } from "./components/UserInput";

const App = () => {
  return (
    <div className={styles.app}>
      <h1>Phonewords</h1>
      <UserInput />
      <Results />
    </div>
  );
};

export default App;
