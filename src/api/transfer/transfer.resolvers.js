module.exports = {
  Mutation: {
    createTransfer (_, args, ctx) {
      return ctx.collections
        .transfer
        .create(args.input)
    }
  },
  Transfer: {
    source (transfer, _, ctx) {
      return ctx.collections
        .person
        .findById(transfer.source)
    },
    target (transfer, _, ctx) {
      return ctx.collections
        .product
        .findById(transfer.target)
    }
  }
}
