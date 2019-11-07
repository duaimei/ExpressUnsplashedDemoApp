const routes = require('express').Router();
const Unsplash = require('../services/unsplash.service')
var request = require("request");

const ACCESS_KEY = '';

routes.get('/', (req, res) => {
  res.status(200).json({ message: 'Connected to the index of the routes folder!' });
});

const options = {
  url: 'https://api.unsplash.com/photos/',
  headers: {
    "Authorization": `Client-ID ${ACCESS_KEY}`
  }
}


routes.get('/photo_query', (req, res) => {
  function callback(error, response, body) {
    if (!error && response.statusCode == 200) {
      res.status(200).json(body)
    } else {
      console.log("something went wrong")
      console.log(error)
      console.log(response.statusCode)
    }
  }
  request(options, callback)
})

routes.get('/unsplash', (req, res) => {
  Unsplash.query(res)
})

routes.use('/callback', (req, res) => {
  console.log('entered the callback')
  console.log(req)
})
module.exports = routes;