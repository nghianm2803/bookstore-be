var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.status(200).send("Welcome to my Github!");
});

/* Book router */
const bookRouter = require("./book.api.js");
router.use("/books", bookRouter);

module.exports = router;
