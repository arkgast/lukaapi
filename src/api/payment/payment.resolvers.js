module.exports = {
  Query: {
    payment (_, args, ctx) {
      return ctx.collections
        .payment
        .findOne([{
          field: 'handle',
          operator: '==',
          value: args.handle
        }])
    }
  },
  Mutation: {
    createPayment (_, args, ctx) {
      return ctx.collections
        .payment
        .create(args.input)
    },
    updatePayment (_, args, ctx) {
      return ctx.collections
        .payment
        .updateOne([
          {
            field: 'handle',
            operator: '==',
            value: args.handle
          }
        ], args.input)
    }
  },
  Payment: {
    source (payment, _, ctx) {
      return ctx.collections
        .person
        .findOne([{
          field: 'handle',
          operator: '==',
          value: payment.source
        }])
    },
    target (payment, _, ctx) {
      return ctx.collections
        .product
        .findOne([{
          field: 'handle',
          operator: '==',
          value: payment.target
        }])
    }
  }
}
