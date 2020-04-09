import React from "react";
import { hydrate } from "react-dom";
import StyleContext from "isomorphic-style-loader/StyleContext";
import { Router } from "react-router-dom";
import { history } from "./lib/routing";
import App from "./containers/App";
import Home from "./containers/Home";

const insertCss = (...styles) => {
  const removeCss = styles.map((style) => style._insertCss());
  return () => removeCss.forEach((dispose) => dispose());
};

const root = document.getElementById("app");

export const browserRender = () => {
  hydrate(
    <StyleContext.Provider value={{ insertCss }}>
      <Router history={history}>
        <App />
      </Router>
    </StyleContext.Provider>,
    root
  );
};
