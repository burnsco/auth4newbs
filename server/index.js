const express = require('express')
const volleyball = require('volleyball')
const cors = require('cors')

require('dotenv').config()

const app = express()

const auth = require('./auth')

// OPTIMIZE ALL THE SERVER CODE INTO MODELS AND CONTROLLERS, SEPARATE ROUTES, ETC

app.use(volleyball)
app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.json({
    message: '🦄🌈✨Hello World! 🌈✨🦄'
  })
})

app.use('/auth', auth)

// RE DO THE ERROR SECTION

function notFound(req, res, next) {
  res.status(404)
  const error = new Error('Not found - ' + req.originalUrl);
  next(error);
}

function errorHandler(err, req, res) {
  res.status(res.statusCode || 500);
  res.json({message: err.message,
    stack: err.stack});
}
app.use(notFound);
app.use(errorHandler);

const port = process.env.PORT || 5000
app.listen(port, () => {
  console.log(`****[ Server listening on port ${port} ]****`)
});

