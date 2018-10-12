const DataLoader = require('dataloader')
const Person = require('./person/person.model')
const Company = require('./company/company.model')
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

const createCompanyLoader = () => {
  return new DataLoader(companyIds => {
    return Company.find({ _id: { $in: companyIds } })
      .exec()
      .then(companies => {
        console.log('company loader batch', companyIds.length)
        const companiesById = _.keyBy(companies, '_id')
        return companyIds.map(companyId => companiesById[companyId])
      })
  })
}

module.exports = () => {
  return {
    person: createPersonLoader(),
    company: createCompanyLoader()
  }
}
