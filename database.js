let mysql = require('mysql');
let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'usernamegeneratordb'
});

connection.connect(function(err) {
    if (err) throw err;
    console.log('database connection successful');
});

module.exports = connection;