module.exports = {
  Query: {
    contract (_, args, ctx, info) {
      const contract = ctx.collections
        .contract
        .findOne([{
          field: 'handle',
          operator: '==',
          value: args.handle
        }])
      return contract
    }
  },
  Mutation: {
    createContract (_, args, ctx) {
      return ctx.collections
        .contract
        .create(args.input)
    }
  },
  Contract: {
    source (contract, _, ctx) {
      return ctx.collections
        .person
        .findOne([{
          field: 'handle',
          operator: '==',
          value: contract.source
        }])
    },
    target (contract, _, ctx) {
      return ctx.collections
        .product
        .findOne([{
          field: 'handle',
          operator: '==',
          value: contract.target
        }])
    }
  }
}
