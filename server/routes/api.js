const express = require('express');
const router = express.Router();

// declare axios fro making requests
const axios = require('axios');


const API = 'https://newsapi.org/v1/articles?source=techcrunch&apiKey=8c08f50583c645f4afe77e84eee9ef51'
    // const API = 'https://jsonplaceholder.typicode.com';

/* GET api listing. */
router.get('/', (req, res) => {
    res.send('api works');
});

// get all post
router.get('/posts', (req, res) => {
    // now using a mock API this should be the service to connect s to mongoDB
    axios.get(`${API}`)
        .then(posts => {
            res.status(200).json(posts.data);
        })
        .catch(error => {
            res.status(500).send(erros)
        });
});

module.exports = router;