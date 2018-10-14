module.exports = {
  Query: {
    product (_, args, ctx) {
      return ctx.collections
        .product
        .findOne([{
          field: 'handle',
          operator: '==',
          value: args.handle
        }])
    },
    products (_, args, ctx) {
      return ctx.collections
        .product
        .find({
          field: 'location.countryCode',
          operator: '==',
          value: args.countryCode
        })
    }
  },
  Mutation: {
    createProduct (_, args, ctx) {
      return ctx.collections
        .product
        .create(args.input)
    }
  },
  Product: {
    source (product, _, ctx) {
      return ctx.collections
        .company
        .findOne({
          field: 'handle',
          operator: '==',
          value: product.source
        })
    }
  }
}
