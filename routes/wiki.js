const router = require("express").Router();
const { addPage } = require("../views");
const { Page } = require("../models");

router.get("/", (req, res, next) => {
  try {
  } catch (err) {}
});

router.post("/", async (req, res, next) => {
  try {
    const page = await Page.create({
      title: req.body.title,
      content: req.body.content,
    });
  } catch (err) {
    next(err);
  }
});

router.get("/add", (req, res, next) => {
  res.send(addPage());
});

module.exports = router;
