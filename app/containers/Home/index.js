import React, { Fragment } from "react";
import withStyles from "isomorphic-style-loader/withStyles";
import { Link } from "react-router-dom";
import styles from "./styles.css";
import { useSelector } from "react-redux";

const Home = () => {
  const text = useSelector((state) => state.data.text);
  return (
    <div>
      <div className={styles.title}>Home</div>
      <div className={styles.subtitle}>Title</div>
      <Link to={`/create`}>Create</Link>
      <div className={styles.subtitle}>Text: {text}</div>
      <Link to={`/settings`}>Settings</Link>
    </div>
  );
};

export default withStyles(styles)(Home);
