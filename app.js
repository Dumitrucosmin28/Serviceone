const express = require('express');
const { Client } = require('pg');
const connectionString = 'postgres://vjtuoqtv:tIIWnTOJLJBSyI96Eiayw4wv_OeDelYk@rajje.db.elephantsql.com:5432/vjtuoqtv';
const client = new Client({
    connectionString: connectionString
});
client.connect();
var app = express();
app.set('port', process.env.PORT || 4000);

app.get('/', function (req, res, next) {
    client.query('SELECT * FROM Employee ', function (err, result) {
        if (err) {
            console.log(err);
            res.status(400).send(err);
        }
        res.status(200).json(result.rows);
    });
});




app.listen(4000, function () {
    console.log('Server is running.. on Port 4000');
});