const router = require("express").Router();
const { addPage } = require("../views");
const { Page } = require("../models");
const { wikipage } = require("../views");

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
    res.send(page);
  } catch (err) {
    next(err);
  }
});

router.get("/add", (req, res, next) => {
  res.send(addPage());
});

router.get("/:slug", async (req, res, next) => {
  try {
    const page = await Page.findOne({
      where: {
        slug: req.params.slug,
      },
    });
    res.send(wikipage(page));
  } catch (err) {
    next(err);
  }
});

module.exports = router;
