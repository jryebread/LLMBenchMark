import React from "react";
import styles from "./header.module.css";
import Setup from "../../setup/setup";
const Header = (): JSX.Element => {
  return (
    <header className={styles.header}>
      <h3 className={styles.topTitle}>
      </h3>
      <h1 className={styles.title}>LLM BenchMark</h1>
      <p className={styles.description}>
        Can your system run that new shiny Large Language Model? {" "} <code className={styles.code}>Let's find out!</code>
        {/* <code className={styles.code}>CSS-Modules</code>,{" "}
        <code className={styles.code}>Jest</code>,{" "}
        <code className={styles.code}>Dark mode</code>,{" "}
        <code className={styles.code}>Husky</code>,{" "}
        <code className={styles.code}>Commit-lint</code>,{" "}
        <code className={styles.code}>ESLint</code>,{" "}
        <code className={styles.code}>Prettier</code> and{" "}
        <code className={styles.code}>Atomic organization</code>. */}
        
      </p>
    </header>
  );
};

export default Header;
