const express = require('express');
const app = express();

app.get('/test', (req, res) => {
    res.send('Api server works fine!')
})

app.listen(3000, () => {
    console.log('Api server started')
})