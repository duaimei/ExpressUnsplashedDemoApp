const Unsplash = require('unsplash-js').default;
const toJson = require('unsplash-js').toJson;

const ACCESS_KEY = '';
const SECRET_KEY = ''

// const unsplash = new Unsplash({ accessKey: ACCESS_KEY });

const unsplash = new Unsplash({
  accessKey: ACCESS_KEY,
  secret: SECRET_KEY
});

exports.query = function (res) {
  unsplash.search.collections("cats", 1)
  .then(toJson)
  .then(json => {
    console.log(json)
    res.status(200).json(json)
  });
}