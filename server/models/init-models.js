var DataTypes = require("sequelize").DataTypes;
var _techdevise_life = require("./techdevise_life");

function initModels(sequelize) {
  var techdevise_life = _techdevise_life(sequelize, DataTypes);


  return {
    techdevise_life,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
