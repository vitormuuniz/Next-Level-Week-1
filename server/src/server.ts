import express from "express";

const app = express();

app.get("/users", (req, res) => {
  console.log("aloka");

  res.json(['aloka', 'alko']);
});

app.listen(3333);