import "babel-polyfill";
import path from "path";
import fs from "fs";
import Loadable from "react-loadable";
import React from "react";
import express from "express";
import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import { parse as parseUrl } from "url";
import StyleContext from "isomorphic-style-loader/StyleContext";
import App from "./app/containers/App";

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.static("./build"));

app.get("*", (req, res) => {
  const url = req.originalUrl || req.url;
  const location = parseUrl(url);
  const indexFile = path.resolve("./build/main.html");
  const context = {};

  if (context.url) {
    req.header("Location", context.url);
    return res.send(302);
  }

  const css = new Set();
  const insertCss = (...styles) => styles.forEach((style) => css.add(style._getCss()));

  const appContent = ReactDOMServer.renderToString(
    <StyleContext.Provider value={{ insertCss }}>
      <StaticRouter location={location} context={context}>
        <App />
      </StaticRouter>
    </StyleContext.Provider>
  );

  fs.readFile(indexFile, "utf8", (err, data) => {
    if (err) {
      console.log("Something went wrong:", err);
      return res.status(500).send("Oops, better luck next time!");
    }
    data = data.replace("__STYLES__", [...css].join(""));
    data = data.replace("__LOADER__", "");
    data = data.replace("<div id=app></div>", `<div id=app>${appContent}</div>`);
    data = data.replace('<div id="app"></div>', `<div id="app">${appContent}</div>`);

    return res.send(data);
  });
});

Loadable.preloadAll().then(() => {
  app.listen(PORT, () => {
    console.log(`😎 Server is listening on port ${PORT}`);
  });
});
