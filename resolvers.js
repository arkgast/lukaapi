module.exports = {
  Query: {
    getPerson () {
      return {
        name: 'Arnold',
        lastName: 'Gandarilllas'
      }
    }
  },
  Mutation: {
    createPerson (_, args, ctx, info) {
      return {
        name: args.input.name,
        lastName: args.input.lastName
      }
    }
  }
}
