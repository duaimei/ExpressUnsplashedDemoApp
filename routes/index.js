const routes = require('express').Router();
var request = require("request");

const ACCESS_KEY = '762f019c6572941c898f045d23688a8b6337eb0a2faf5ec34c9e224a6b2ccab6';

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

module.exports = routes;