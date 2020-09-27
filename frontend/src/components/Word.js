import React from "react";
import styles from "./Word.module.css";

export const Word = React.memo(({ value }) => {
  return <div className={styles.word}>{value}</div>;
});
