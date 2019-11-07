#### Introduction
This is an example app of an Express.js implementation of Unsplash's API

#### source documentation
https://unsplash.com/documentation
https://github.com/unsplash/unsplash-js

#### what I'm trying to accomplish, using a plain curl command
`curl -H "Authorization: Client-ID <ACCESS_KEY>" https://api.unsplash.com/search/collections?query=cats&per_page=10&page=1`

### where things are
## routes/index.js
this is where the route paths are defined

## services/unsplash.service.js
This is where the unsplash service resides.