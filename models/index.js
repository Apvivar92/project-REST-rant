// require dotenv package to use the MONGO_URI enviornment variable
require("dotenv").config();

// require mongoose
const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_URI, {
  useNewURLParser: true,
  useUnifiedTopology: true,
});

// Adds access to all of our models
module.exports.Place = require("./places");
module.exports.Comment = require("./comment");
