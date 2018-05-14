var Sequelize = require('sequelize');

var env = process.env.NODE_ENV || 'development';
var config = require('./config')[env]; //using config.js here

if (config.use_env_variable) {
	var sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
	var sequelize = new Sequelize(
		config.database,
		config.username,
		config.password,
		config
	);
}

module.exports = sequelize;