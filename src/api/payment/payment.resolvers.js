module.exports = {
  Query: {
    async payment (_, args, ctx) {
      const payment = await ctx.models.payment
        .findOne({ handle: args.handle })
        .exec()
      return payment
    }
  },
  Mutation: {
    createPayment (_, args, ctx) {
      return ctx.models.payment.create(args.input)
    },
    async updatePayment (_, args, ctx) {
      const { handle, input } = args
      await ctx.models.payment
        .updateOne({ handle }, input)

      const payment = ctx.models.payment
        .findOne({ handle })

      return payment
    }
  },
  Payment: {
    source (payment, _, ctx) {
      return ctx.models.person
        .findOne({ handle: payment.source })
        .exec()
    },
    target (payment, _, ctx) {
      return ctx.models.product
        .findOne({ handle: payment.target })
        .exec()
    }
  }
}
