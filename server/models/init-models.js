var DataTypes = require("sequelize").DataTypes;
var _blogs = require("./blogs");

function initModels(sequelize) {
  var blogs = _blogs(sequelize, DataTypes);


  return {
    blogs,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
