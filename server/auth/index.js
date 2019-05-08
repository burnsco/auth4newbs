const express = require('express')
const Joi = require('@hapi/joi')
const router = express.Router()
const bcrypt = require('bcryptjs')
const cors = require('cors')
const jwt = require('jsonwebtoken')
require('dotenv').config()

router.use(cors())

const db = require('../db/connection')
// create variable for database 'users' collection
const users = db.get('users')
users.createIndex('username', { unique: true })

// Joi scheme to check for proper username/pass schema
const schema = Joi.object().keys({
  username: Joi.string().alphanum().min(5).max(15).required(),
  password: Joi.string().regex(/^[a-zA-Z0-9]{5,15}$/).required(),
});

function createTokenSendResponse(user, res, next) {
  const payload = {
    _id: user._id,
    username: user.username
  }
  console.log(`User ${payload.username} is attempting to log in`);
  // generate token for user
  jwt.sign(payload, process.env.TOKEN_SECRET, {
    expiresIn: '1d'
  }, (err, token) => {
    if (err) {
      res.status(422)
      const error = new Error('token cant be created')
      next(error)
    } else {
      console.log(`Creating token and logging in`);
      res.json(token)
    }
  })
}

router.get('/', (req, res) => {
  res.json({message: 'LOCK'})
})

router.post('/signup', (req, res, next) => {
  // result --> validation of the user/pass using Joi
  const result = Joi.validate(req.body, schema);
  // result will come back 'null' if it passes
  if (result.error === null) {
    // using (monk.js) to search database for username
    users.findOne({
      username: req.body.username
    }).then(user => {
      // check if it exists
      if (user) {
        // send status error to FE so that we know its taken
        const error = new Error('That username already exists')
        res.status(409)
        next(error)
      } else {
        // username available, so hash password
        bcrypt.hash(req.body.password, 12).then(hashedPassword => {
          const newUser = {
            username: req.body.username,
            password: hashedPassword
          }
          // pass is hashed, so insert it into the DB
          users.insert(newUser).then(insertedUser => {
            // function to create token and save user at same time
            createTokenSendResponse(insertedUser, res, next);
          })
        })
      }
    })
  } else {
    // covers any other error
    res.status(422)
    next(result.error)
  }
});

router.post('/login', (req, res, next) => {
  // make sure its a valid username and password (joi.js)
  const result = Joi.validate(req.body, schema)
  // if it is, then move on to next step
  if (result.error === null) {
    // check database for the user (monk.js)
    users.findOne({
      username: req.body.username,
    }).then(user => {
      // then the result ^ 'user' is found, compare the hashed to the front end pass
      if (user) {
        // using bcrypt.js to validate passwords (hash)
        bcrypt
          .compare(req.body.password, user.password)
          .then(result => {
          // if its true, give a cookie?
            if (result) {
            // its correct, so create payload for token generation
              createTokenSendResponse(user, res, next)
            } else {
            // its incorrect
              res.status(422)
              const error = new Error('Password Incorrect')
              next(error)
            }
          })
        // if it isnt found
      } else {
        res.status(422)
        const error = new Error('Username not Found')
        next(error)
      }
    })
  } else {
    // this would be an invalid username password schema
    res.status(422)
    const error = new Error('Invalid schema')
    next(error)
  }
})

module.exports = router