module.exports = {
  Query: {
    async company (_, args, ctx) {
      const companyData = await ctx
        .collections
        .company
        .where('handle', '==', args.handle)
        .get()

      let company = null
      companyData.docs.forEach(snapshot => {
        company = {
          ...snapshot.data(),
          createdAt: snapshot.createTime.toDate(),
          updatedAt: snapshot.updateTime.toDate()
        }
      })
      return company
    },
    async companies (_, args, ctx) {
      const companiesData = await ctx
        .collections
        .company
        .where('location.countryCode', '==', args.countryCode)
        .get()

      return companiesData.docs.map(company => ({
        ...company.data(),
        createdAt: company.createTime.toDate(),
        updatedAt: company.updateTime.toDate()
      }))
    }
  },
  Mutation: {
    async createCompany (_, args, ctx) {
      const ref = await ctx
        .collections
        .company
        .add(args.input)

      const company = await ctx
        .collections
        .company
        .doc(ref.id)
        .get()

      return {
        ...company.data(),
        createdAt: company.createTime.toDate(),
        updatedAt: company.updateTime.toDate()
      }
    }
  },
  Company: {
    async products (company, _, ctx) {
      const productsData = await ctx
        .collections
        .product
        .where('source', '==', company.handle)
        .get()

      return productsData.docs.map(product => ({
        ...product.data(),
        createdAt: company.createTime.toDate(),
        updatedAt: company.updateTime.toDate()
      }))
    }
  }
}
