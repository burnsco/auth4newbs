const express = require('express')
const volleyball = require('volleyball')
const cors = require('cors')

require('dotenv').config()

const app = express()
const middlewares = require('./auth/middlewares')

const auth = require('./auth')

app.use(volleyball)
app.use(cors())
app.use(express.json())

app.use(middlewares.checkTokenSetUser)

app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to the API ROOT',
    user: req.user
  })
})

app.use('/auth', auth)

function notFound(req, res, next) {
  res.status(404)
  const error = new Error('Not found - ' + req.originalUrl)
  next(error)
}

function errorHandler(err, req, res) {
  res.status(res.statusCode || 500)
  res.json({message: err.message,
    stack: err.stack})
}
app.use(notFound);
app.use(errorHandler);

const port = process.env.PORT || 5000
app.listen(port, () => {
  console.log(`****[ Server listening on port ${port} ]****`)
})

