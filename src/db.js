const mongoose = require('mongoose')

const connectToDB = (url = 'mongodb://localhost/luka') => {
  return mongoose.connect(url, {
    useNewUrlParser: true
  })
}

module.exports = connectToDB
