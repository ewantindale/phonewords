import React from "react";
import styles from "./Word.module.css";

export const Word = ({ value }) => {
  return <div className={styles.word}>{value}</div>;
};
