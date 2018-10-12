module.exports = {
  Query: {
    async product (_, args, ctx) {
      const product = await ctx.models.product
        .findOne({ handle: args.handle })
        .exec()
      return product
    },
    products (_, args, ctx) {
      return ctx.models.product
        .find({ 'location.countryCode': args.countryCode })
        .exec()
    }
  },
  Mutation: {
    createProduct (_, args, ctx) {
      return ctx.models.product.create(args.input)
    }
  }
}
