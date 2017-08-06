// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
  selectAll: function(functioninModel) {
    orm.selectAll("burgers", function(res) {
      functioninModel(res);
    });
  },
};

// Export the database functions for the controller (catsController.js).
module.exports = burger;
