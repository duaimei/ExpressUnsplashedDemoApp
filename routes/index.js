const routes = require('express').Router();
var request = require("request");

const ACCESS_KEY = '762f019c6572941c898f045d23688a8b6337eb0a2faf5ec34c9e224a6b2ccab6';

routes.get('/', (req, res) => {
  res.status(200).json({ message: 'Connected to the index of the routes folder!' });
});

routes.get('/photo_query', (req, res) => {
  request(`https://api.unsplash.com/photos/?client_id=${ACCESS_KEY}`, function(error, response, body) {
    if (!error && response.statusCode == 200) {
      console.log(body)
      res.status(200).json(body)
    } else {
      console.log("something went wrong")
      console.log(error)
      console.log(response.statusCode)
    }
  })
})

module.exports = routes;