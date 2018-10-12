const DataLoader = require('dataloader')
const Person = require('./person/person.model')
const Company = require('./company/company.model')
const Product = require('./product/product.model')
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

const createProductLoader = () => {
  return new DataLoader(productIds => {
    return Product.find({ _id: { $in: productIds } })
      .exec()
      .then(products => {
        console.log('product loader batch', productIds.length)
        const productsById = _.keyBy(products, '_id')
        return productIds.map(productId => productsById[productId])
      })
  })
}

module.exports = () => {
  return {
    person: createPersonLoader(),
    company: createCompanyLoader(),
    product: createProductLoader()
  }
}
