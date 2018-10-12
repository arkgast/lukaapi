const DataLoader = require('dataloader')
const Person = require('./person/person.model')
const _ = require('lodash')

const createPersonLoader = () => {
  return new DataLoader(personIds => {
    return Person.find({ _id: { $in: personIds } })
      .exec()
      .then(persons => {
        console.log('person loader batch', personIds.length)
        const personsById = _.keyBy(persons, '_id')
        return personIds.map(personId => personsById[personId])
      })
  })
}

module.exports = () => {
  return {
    person: createPersonLoader()
  }
}
