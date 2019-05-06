const express = require('express')
const Joi = require('@hapi/joi')
const router = express.Router()
const bcrypt = require('bcryptjs')
const cors = require('cors')

const corsOptions = {
    origin: 'http://localhost:8080',
    optionsScuccessStatus:  200
}


const db = require('../db/connection')
const users = db.get('users')
users.createIndex('username', { unique: true })

const schema = Joi.object().keys({
      username: Joi.string().alphanum().min(5).max(15).required(),
      password: Joi.string().regex(/^[a-zA-Z0-9]{5,15}$/).required(),
});

router.get('/', (req, res) => {
    res.json({message: 'LOCK'})
})

router.post('/signup', cors(corsOptions), (req, res, next) => {
  
    const result = Joi.validate(req.body, schema);

    if (result.error === null) {
     
        users.findOne({
            username: req.body.username
        }).then(user => {
         
            if (user) {
                const err = new Error('That username already exists')
                next(err);

            } else {
            
                bcrypt.hash(req.body.password, 12).then(hashedPassword => {
                   const newUser = {
                       username: req.body.username,
                       password: hashedPassword
                   };
                   users.insert(newUser).then(insertedUser => {
                       delete insertedUser.password;
                       res.json(insertedUser)
                   })
                })
            }
        })
    } else {
        next(result.error)
    }
});

module.exports = router