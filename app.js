const express = require("express");
const app = express();
const morgan = require("morgan");
const path = require("path");
const { db, Page, User } = require("./models");
const wikiRouter = require("./routes/wiki");
const userRouter = require("./routes/users");

app.use(morgan("dev"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: false }));
app.use("/wiki", wikiRouter);

app.get("/", (req, res, next) => {
  res.redirect("/wiki");
});

const init = async () => {
  await db.sync({ force: true });

  app.listen(3000, () => {
    console.log(`Server is listening on port 3000!`);
  });
};

init();

db.authenticate().then(() => {
  console.log("connected to the database");
});
