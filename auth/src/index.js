const express = require('express');
const { connectDb } = require('./helpers/db');
const { port, host, db } = require('./configuration');

const app = express();


const startServer = () => {
    app.listen(port, () => {
        console.log(`Auth service started on port ${port}`)
        console.log (`Host is: ${host}`)
        console.log(`Database connection: ${db}`)
    })
}

app.get('/test', (req, res) => {
    res.send('Auth service works fine!')
})
app.get('*', (req, res) => {
    res.send(`Hello on port ${port}`)
})

connectDb()
    .on('error', console.log)
    .on('disconnected', connectDb)
    .once('open', startServer)