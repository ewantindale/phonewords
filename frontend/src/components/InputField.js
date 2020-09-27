import React from "react";
import styles from "./InputField.module.css";

export const InputField = React.memo(({ numericString }) => {
  return <div className={styles.inputField}>{numericString}</div>;
});
