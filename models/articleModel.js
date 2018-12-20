// Require mongoose
var mongoose = require("mongoose");

// Get a reference to the mongoose Schema constructor
var Schema = mongoose.Schema;

var ArticleSchema = new Schema({
 title: {
    type: String,
    trim: true,
    required: "Title is Required"
  },
 url: {
    type: String,
    trim: true,
    required: "Link is Required"
  },
  date: {
    type: Date,
    default: Date.now
  }
});

// This creates our model from the above schema, using mongoose's model method
var Article = mongoose.model("Article", ArticleSchema);

// Export the Example model
module.exports = Article;
