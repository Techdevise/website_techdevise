var DataTypes = require("sequelize").DataTypes;
var _job_subtitle = require("./job_subtitle");

function initModels(sequelize) {
  var job_subtitle = _job_subtitle(sequelize, DataTypes);


  return {
    job_subtitle,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
