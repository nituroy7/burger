var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(httpRequest, httpResponse) {
  burger.selectAll(function(data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    console.log("\n");
    httpResponse.render("index", hbsObject);
  });
});

// Export routes for server.js to use.
module.exports = router;
