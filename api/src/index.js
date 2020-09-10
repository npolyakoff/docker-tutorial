const express = require('express');
const app = express();
const port = process.env.PORT;
const host = process.env.HOST

app.get('/test', (req, res) => {
    res.send('Api server works fine!')
})
app.get('*', (req, res) => {
    res.send(`Hello on port ${port}`)
})

app.listen(port, () => {
    console.log(`Api server started on port ${port}`)
    console.log (`Host is ${host}`)
})