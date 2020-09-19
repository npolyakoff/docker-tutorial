const express = require('express');
const mongoose = require('mongoose');
const { connectDb } = require('./helpers/db');
const { port, host, db, authApiUrl } = require('./configuration');
const axios = require('axios');

const app = express();


const startServer = () => {
    app.listen(port, () => {
        console.log(`Api server started on port ${port}`)
        console.log (`Host is: ${host}`)
        console.log(`Database connection: ${db}`)

        // Post.find(function (err, posts) {
        //     if (err) return console.error(err);
        //     console.log(posts);
        //   })

        const post = new Post({ name: 'Silence' });
        post.save(function (err, savedPost) {
            if (err) return console.error(err);
            console.log(savedPost)
        });
    })
}

const postSchema = new mongoose.Schema({
    name: String
});

const Post = mongoose.model('Post', postSchema) 

app.get('/welcome', (req, res) => {
    res.send('Welcome on Api service!')
})

app.get('/test-authUser', (req, res) => {
    axios.get(`${authApiUrl}/authUser`)
    .then(response => {
        res.json({
            userFromAuth: response.data
        })
        res.send(response)
    })
})

app.get('/api/apiData', (req, res) => {
    res.json({
        testApi: true,
    })
})

app.get('*', (req, res) => {
    res.send(`It is Api service. Hello on port ${port}`)
})

connectDb()
    .on('error', console.log)
    .on('disconnected', connectDb)
    .once('open', startServer)