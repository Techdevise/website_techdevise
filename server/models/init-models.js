var DataTypes = require("sequelize").DataTypes;
var _hire_roles = require("./hire_roles");

function initModels(sequelize) {
  var hire_roles = _hire_roles(sequelize, DataTypes);


  return {
    hire_roles,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
