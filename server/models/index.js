'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const process = require('process');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (
      file.indexOf('.') !== 0 &&
      file !== basename &&
      file.slice(-3) === '.js' &&
      file.indexOf('.test.js') === -1
    );
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

// sequelize.sync({ force: false, alter: true })
//   .then(() => console.log('Models synchronized successfully.'))
//   .catch(err => console.error('Model synchronization error:', err));
db.sequelize = sequelize;
db.Sequelize = Sequelize;

 db.User = require("./user")(sequelize,Sequelize)
 db.Cms = require("./cms")(sequelize,Sequelize)
 db.JobPosition = require("./job_positions")(sequelize,Sequelize)
 db.JobTitle = require("./job_title")(sequelize,Sequelize)
 db.JobOption = require("./job_options")(sequelize,Sequelize)
 db.ContactUs = require("./contact_us")(sequelize,Sequelize)
 db.SpeakExperts = require("./speak_experts")(sequelize,Sequelize)


db.JobOption.hasMany(db.JobPosition, {
  foreignKey: 'jobOption_id',
  as: 'positions'
});

db.JobPosition.belongsTo(db.JobOption, {
  foreignKey: 'jobOption_id',
  as: 'joboption' 
});
db.JobTitle.hasMany(db.JobOption, {
  foreignKey: 'job_id',
  as: 'options'
});

db.JobOption.belongsTo(db.JobTitle, {
  foreignKey: 'job_id',
  as: 'jobtitle'
});


module.exports = db;
