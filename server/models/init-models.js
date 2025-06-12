var DataTypes = require("sequelize").DataTypes;
var _quality_analysis = require("./quality_analysis");

function initModels(sequelize) {
  var quality_analysis = _quality_analysis(sequelize, DataTypes);


  return {
    quality_analysis,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
