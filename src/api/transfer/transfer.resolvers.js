module.exports = {
  Mutation: {
    createTransfer (_, args, ctx) {
      return ctx.models.transfer.create(args.input)
    }
  },
  Transfer: {
    source (transfer, _, ctx) {
      return ctx.models.person
        .findById(transfer.source)
        .exec()
    },
    target (transfer, _, ctx) {
      return ctx.models.product
        .findById(transfer.target)
        .exec()
    }
  }
}
