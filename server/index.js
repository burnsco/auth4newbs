const express = require('express')
const volleyball = require('volleyball')
const auth = require('./auth/index')

const app = express()

app.use(volleyball)
app.use('/auth', auth)

app.get('/', (req, res) => {
    res.json({
        title: 'front page'
    })
})

app.listen(3005, console.log('app listening on port 3005'))

