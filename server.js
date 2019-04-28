var express = require("express");
var logger = require("morgan");
var mongoose = require("mongoose");
var xxxxxxx = requre("")
// Scraping Tools:
// Axios is a promised-based http library (similar to jQuery's Ajax method). Axios works on the client and on the server.
var axios = require("axios");
var cheerio = require("cheerio");

// Require all models
var db = require("./models");

var PORT = 3000;

// Initialize Express
var app = express();

// Configure middleware

// Use morgan logger for logging requests
app.use(logger("dev"));
// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Make public a static folder
app.use(express.static("public"));

// Connect to the Mongo DB
mongoose.connect("mongodb://localhost/unit18Populater", { useNewUrlParser: true });



// Start the server
app.listen(PORT, function() {
  console.log("App running on port " + PORT + "!");
});
