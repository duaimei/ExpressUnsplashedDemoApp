const express = require('express')
const cors = require('cors');
const routes = require('./routes');

const app = express()
const port = 3000

app.use(cors({
  origin: 'http://localhost:8080'
}));

app.use('/', routes)

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})