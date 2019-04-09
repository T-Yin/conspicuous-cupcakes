// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var cupcake = {
  all: function(cb) {
    orm.all("cupcakes", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  create: function(cols, vals, cb) {
    orm.create("cupcakes", cols, vals, function(res) {
      cb(res);
    });
  },
  update: function(objColVals, condition, cb) {
    orm.update("cupcakes", objColVals, condition, function(res) {
      cb(res);
    });
  },
  delete: function(condition, cb) {
    orm.destroy("cupcakes", condition, function(res) {
      cb(res);
    })
  }
};

// Export the database functions for the controller (cupcakesController.js).
module.exports = cupcake;
