const mongoose = require('mongoose')

mongoose.set('useCreateIndex', true)
const connectToDB = (url = 'mongodb://localhost/luka') => {
  return mongoose.connect(url, {
    useNewUrlParser: true
  })
}

module.exports = connectToDB
