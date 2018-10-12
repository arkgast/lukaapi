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
  },
  Contract: {
    source (contract, _, ctx) {
      return ctx.models.person
        .findOne({ handle: contract.source })
        .exec()
    },
    target (contract, _, ctx) {
      return ctx.models.product
        .findOne({ handle: contract.target })
        .exec()
    }
  }
}
