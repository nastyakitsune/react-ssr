import React from "react";
import withStyles from "isomorphic-style-loader/withStyles";
import styles from "./styles.css";

const FormSettings = () => {
  return (
    <div>
      <div className={styles.title}>FormSettings</div>
      <div className={styles.subtitle}>Title</div>
    </div>
  );
};

export default withStyles(styles)(FormSettings);
