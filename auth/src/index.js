const express = require('express');
const { connectDb } = require('./helpers/db');
const { port, host, db, apiUrl } = require('./configuration');
const axios = require('axios');
const { response } = require('express');


const app = express();


const startServer = () => {
    app.listen(port, () => {
        console.log(`Auth service started on port ${port}`)
        console.log (`Host is: ${host}`)
        console.log(`Database connection: ${db}`)
    })
}

app.get('/welcome', (req, res) => {
    res.send('Welcome on Auth service!')
})

app.get('/api/authUser', (req, res) => {
    res.json({
        id: '123',
        email: 'foo@mail.com'
    })
})

app.get('/test-apiData', (req, res) => {
    axios.get(`${apiUrl}/apiData`)
    .then(response => {
        res.json({
            testApi: response.data,
        })
    })
})

app.get('*', (req, res) => {
    res.send(`It is Auth service. Hello on port ${port}`)
})

connectDb()
    .on('error', console.log)
    .on('disconnected', connectDb)
    .once('open', startServer)