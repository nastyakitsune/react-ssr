import React from "react";
import withStyles from "isomorphic-style-loader/withStyles";
import styles from "./styles.css";
import test from "../../images/test.jpg";

const CreateForm = () => {
  return (
    <div>
      <div className={styles.title}>Create form</div>
      <div className={styles.subtitle}>Title</div>
      <img src={test}/>
    </div>
  );
};

export default withStyles(styles)(CreateForm);
