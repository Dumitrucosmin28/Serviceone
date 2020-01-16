const express = require('express')

const PORT = process.env.PORT || 5000

express()
.get('/', (req, res) => res.send('Got a Get request'))
.post('/', (req, res) => res.send('Got a POST request'))
.delete('/', (req, res) => res.send('Got a Delete request'))
.put('/', (req, res) => res.send('Got a Put request'))
.listen(PORT, () => console.log(`Listening on ${ PORT }`))