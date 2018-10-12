module.exports = {
  Query: {
    async person (_, args, ctx, info) {
      const person = await ctx.models.person
        .findOne({ phone: args.phone })
        .exec()
      return person
    },
    people (_, args, ctx) {
      return ctx.models.person
        .find({ 'location.countryCode': args.countryCode })
        .exec()
    }
  },
  Mutation: {
    createPerson (_, args, ctx) {
      return ctx.models.person.create(args.input)
    },
    async updatePerson (_, args, ctx) {
      const { phone, input } = args
      await ctx.models.person
        .updateOne({ phone }, { ...input })

      const person = ctx.models.person
        .findOne({ phone: input.phone || phone })

      return person
    }
  }
}
