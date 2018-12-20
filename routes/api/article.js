var express = require("express");
var router = new express.Router();
const articleController = require("../../controllers/articleController");

// Matches with "/api/artticles"
router.route("/")
  .get(articleController.findAll) // (get) - your components will use this to query MongoDB for all saved articles
  .post(articleController.create);  // (post) - your components will use this to save an article to the database

// Matches with "/api/articles/:id"
router
  .route("/:id")
  .delete(booksController.remove);  // (delete) - your components will use this to delete a saved article in the database

module.exports = router;
