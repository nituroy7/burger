var connection = require("../config/connection.js");

var orm = {
  selectAll: function(tableName, functioninOrm) {
    var queryString = "SELECT * FROM " + tableName + ";";
    connection.query(queryString, function(err, result) {
      functioninOrm(result);
    });
  }
};
module.exports = orm;