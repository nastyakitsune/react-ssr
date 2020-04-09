import React from "react";
import withStyles from "isomorphic-style-loader/withStyles";
import styles from "./styles.less";

const CreateForm = () => {
  return (
    <div>
      <div className={styles.title}>Create form</div>
      <div className={styles.subtitle}>Title</div>
    </div>
  );
};

export default withStyles(styles)(CreateForm);
