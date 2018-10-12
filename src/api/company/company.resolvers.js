module.exports = {
  Query: {
    async company (_, args, ctx, info) {
      const company = await ctx.models.company
        .findOne({ handle: args.handle })
        .exec()
      return company
    },
    companies (_, args, ctx) {
      return ctx.models.company
        .find({ 'location.countryCode': args.countryCode })
        .exec()
    }
  },
  Mutation: {
    createCompany (_, args, ctx) {
      return ctx.models.company.create(args.input)
    }
  },
  Company: {
    products (company, _, ctx) {
      return ctx.models.product
        .find({ source: company.handle })
    }
  }
}
