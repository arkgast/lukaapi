module.exports = {
  Query: {
    async company (_, args, ctx, info) {
      const company = await ctx.models.company
        .findOne({ handle: args.handle })
        .exec()
      return company
    },
    companies (_, __, ctx) {
      return ctx.models.company
        .find({})
        .exec()
    }
  },
  Mutation: {
    createCompany (_, args, ctx) {
      return ctx.models.company.create(args.input)
    }
  }
}
