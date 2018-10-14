module.exports = {
  Query: {
    company (_, args, ctx) {
      return ctx.collections
        .company
        .findOne([{
          field: 'handle',
          operator: '==',
          value: args.handle
        }])
    },
    companies (_, args, ctx) {
      return ctx.collections
        .company
        .find([{
          field: 'location.countryCode',
          operator: '==',
          value: args.countryCode
        }])
    }
  },
  Mutation: {
    createCompany (_, args, ctx) {
      return ctx.collections
        .company
        .create(args.input)
    }
  },
  Company: {
    products (company, _, ctx) {
      return ctx.collections
        .product
        .find([{
          field: 'source',
          operator: '==',
          value: company.handle
        }])
    }
  }
}
