module.exports = {
  Query: {
    person (_, args, ctx) {
      return ctx.collections
        .person
        .findOne([{
          field: 'phone',
          operator: '==',
          value: args.phone
        }])
    },
    people (_, args, ctx) {
      return ctx.collections
        .person
        .find([{
          field: 'location.countryCode',
          operator: '==',
          value: args.countryCode
        }])
    }
  },
  Mutation: {
    createPerson (_, args, ctx) {
      return ctx.collections
        .person
        .create(args.input)
    },
    updatePerson (_, args, ctx) {
      return ctx.collections
        .person
        .updateOne([
          {
            field: 'handle',
            operator: '==',
            value: args.handle
          }
        ], args.input)
    }
  }
}
