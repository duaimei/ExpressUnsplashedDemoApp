const Unsplash = require('unsplash-js').default;

const ACCESS_KEY = '';
const SECRET_KEY = ''

// const unsplash = new Unsplash({ accessKey: ACCESS_KEY });

const unsplash = new Unsplash({
  accessKey: ACCESS_KEY,
  secret: SECRET_KEY,
  callbackUrl: 'http://localhost:3000/'
});

exports.query = function (res) {
  unsplash.search.collections("cats", 1)
  // .then(unsplash.toJson)
  .then(json => {
    console.log(json)
    res.status(200).json(json)
  });
}