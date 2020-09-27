import React from "react";
import { useSelector } from "react-redux";
import styles from "./Results.module.css";
import { Word } from "./Word";

export const Results = () => {
  const results = useSelector((state) => state.phonewords.results);
  const loading = useSelector((state) => state.phonewords.loading);

  return (
    <div className={styles.wrapper}>
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
  );
};
