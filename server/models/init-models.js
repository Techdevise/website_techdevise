var DataTypes = require("sequelize").DataTypes;
var _speak_experts = require("./speak_experts");

function initModels(sequelize) {
  var speak_experts = _speak_experts(sequelize, DataTypes);


  return {
    speak_experts,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
