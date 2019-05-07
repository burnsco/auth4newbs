const db = require('monk')('localhost/cj-auth')

db.then(() => {
  console.log('****[ Connected to Database ]****')
})
module.exports = db