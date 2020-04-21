import express from "express";
import fs from "fs";
import React from "react";
import { renderToString } from "react-dom/server";
import { App } from "../src/containers/App";

const PORT = process.env.PORT || 3001;

const server = express();

server.use(express.static("./dist"));

server.get("*", (request, response) => {
  const app = renderToString(<App />);

  fs.readFile("./dist/index.html", "utf8", (error, data) => {
    if (error) {
      return response.status(500).send("Something went wrong 🤨");
    }

    const html = data.replace("__APP__", app);

    return response.status(200).send(html);
  });
});

server.listen(PORT, () => console.log(`Server started on ${PORT} port 🚒`));
