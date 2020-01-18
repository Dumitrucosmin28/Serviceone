const express = require('express')
const axios = require('axios');

const PORT = process.env.PORT || 5000

let users = [];



express()
.get('/', (req, res) => res.send('Got a Get request'))
.get('/users', function(req, res) {
    axios.get('https://service-2.herokuapp.com/users')
    .then(function (response) {
        users = response.data;
    });
    res.send(JSON.stringify(users));
    users=[];
  })
.post('/', (req, res) => res.send('Got a POST request'))
.delete('/', (req, res) => res.send('Got a Delete request'))
.put('/', (req, res) => res.send('Got a Put request'))
.listen(PORT, () => console.log(`Listening on ${ PORT }`))