const express = require('express')
const path = require('path')
const { Client } = require('pg');
const connectionString = 'postgres://vjtuoqtv:tIIWnTOJLJBSyI96Eiayw4wv_OeDelYk@rajje.db.elephantsql.com:5432/vjtuoqtv';
const client = new Client({
    connectionString: connectionString
});
client.connect();
const PORT = process.env.PORT || 5000



express()
.get('/', function (req, res,) {
    client.query('SELECT * FROM Employee ', function (err, result) {
        if (err) {
            console.log(err);
            res.status(400).send(err);
        }
        y
        res.status(200).json(result.rows);
    });
})
.post('/', (req, res) => res.send('Got a POST request'))
.delete('/', (req, res) => res.send('Got a Delete request'))
.put('/', (req, res) => res.send('Got a Put request'))
.listen(PORT, () => console.log(`Listening on ${ PORT }`))
