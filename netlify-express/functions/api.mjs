import express from "express";
import serverless from "serverless-http";

const app = express();

app.get("/", (req, res) => {
  res.send("Welcome");
});

app.get("/about", (req, res) => {
  res.json({
    name: "Mukha",
    hobby: {
      1: "hobby1",
      2: "hobby2",
      3: "hobby3",
    },
  });
});

export const handler = serverless(app);
