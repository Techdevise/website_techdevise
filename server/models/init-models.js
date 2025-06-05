var DataTypes = require("sequelize").DataTypes;
var _contact_us = require("./contact_us");

function initModels(sequelize) {
  var contact_us = _contact_us(sequelize, DataTypes);


  return {
    contact_us,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
