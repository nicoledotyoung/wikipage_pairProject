const express = require("express");
const app = express();
const morgan = require("morgan");
const path = require("path");
const { db } = require("./models");

app.use(morgan("dev"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res, next) => {
  res.send("Hello World!");
});

app.listen(3000, (err) => {
  if (!err) {
    console.log("Listening at lh:3000");
  }
});

db.authenticate().then(() => {
  console.log("connected to the database");
});
