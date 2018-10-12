module.exports = {
  Query: {
    async contract (_, args, ctx, info) {
      const contract = await ctx.models.contract
        .findOne({ handle: args.handle })
        .exec()
      return contract
    }
  },
  Mutation: {
    createContract (_, args, ctx) {
      return ctx.models.contract.create(args.input)
    }
  }
}
