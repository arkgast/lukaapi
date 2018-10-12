const DataLoader = require('dataloader')

const Contract = require('./contract/contract.model')
const Company = require('./company/company.model')
const Payment = require('./payment/payment.model')
const Person = require('./person/person.model')
const Product = require('./product/product.model')
const _ = require('lodash')

const createPersonLoader = () => {
  return new DataLoader(personIds => {
    return Person.find({ _id: { $in: personIds } })
      .exec()
      .then(persons => {
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
        const productsById = _.keyBy(products, '_id')
        return productIds.map(productId => productsById[productId])
      })
  })
}

const createPaymentLoader = () => {
  return new DataLoader(paymentIds => {
    return Payment.find({ _id: { $in: paymentIds } })
      .exec()
      .then(payments => {
        const paymentsById = _.keyBy(payments, '_id')
        return paymentIds.map(paymentId => paymentsById[paymentId])
      })
  })
}

const createContractLoader = () => {
  return new DataLoader(contractIds => {
    return Contract.find({ _id: { $in: contractIds } })
      .exec()
      .then(contracts => {
        const contractsById = _.keyBy(contracts, '_id')
        return contractIds.map(contractId => contractsById[contractId])
      })
  })
}

module.exports = () => {
  return {
    contract: createContractLoader(),
    company: createCompanyLoader(),
    payment: createPaymentLoader(),
    person: createPersonLoader(),
    product: createProductLoader()
  }
}
