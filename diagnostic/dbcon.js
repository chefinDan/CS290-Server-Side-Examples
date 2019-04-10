var mysql = require('mysql');
var pool = mysql.createPool({
  connectionLimit : 10,
  host            : 'mysql.engr.oregonstate.edu',
  user            : 'cs340_greendan',
  password        : '',
  database        : 'cs340_greendan'
});

module.exports.pool = pool;
