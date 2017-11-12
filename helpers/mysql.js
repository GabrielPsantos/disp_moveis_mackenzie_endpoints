var mysql = require('mysql');
var config = require('../config/config');

module.exports =  mysql.createPool({
	host : config.host,
	user : config.user,
	password : config.password,
	database : config.database,
	port : config.port
});



