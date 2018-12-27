const router = require("express").Router();
const routes = require("./article.js");

router.use("/", routes);

module.exports = router;