const router = require("express").Router();
const { addPage } = require("../views");
const { Page } = require("../models");
const { wikiPage } = require("../views");
const { main } = require("../views");

router.get("/", async (req, res, next) => {
  try {
    const page = await Page.findAll();
    res.send(main(page));
  } catch (err) {
    next(err);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const page = await Page.create({
      title: req.body.title,
      content: req.body.content,
    });
    res.redirect(`/wiki/${page.slug}`);
  } catch (err) {
    next(err);
  }
});

router.get("/add", async (req, res, next) => {
  res.send(addPage());
});

router.get("/:slug", async (req, res, next) => {
  try {
    const page = await Page.findOne({
      where: {
        slug: req.params.slug,
      },
    });
    console.log("This is the page -->", page);
    res.send(wikiPage(page));
  } catch (err) {
    next(err);
  }
});

module.exports = router;
