const admin = require('firebase-admin')

const firestore = admin.firestore()

const getData = async (collection, filters) => {
  filters.forEach(filter => {
    collection = collection.where(filter.field, filter.operator, 'yambal_bo')
  })
  return collection.get()
}

module.exports = (collectionName) => {
  const collection = firestore.collection(collectionName)

  return {
    async create (collectionInformation) {
      const ref = await collection.add(collectionInformation)
      return this.findById(ref.id)
    },
    async findById (id) {
      const snapshot = await collection
        .doc(id)
        .get()

      return {
        ...snapshot.data(),
        createdAt: snapshot.createTime.toDate(),
        updatedAt: snapshot.updateTime.toDate()
      }
    },
    async findOne (filters) {
      let company = null
      const data = await getData(collection, filters)

      data.docs.forEach(snapshot => {
        company = {
          ...snapshot.data(),
          createdAt: snapshot.createTime.toDate(),
          updatedAt: snapshot.updateTime.toDate()
        }
      })

      return company
    },
    async find (filters) {
      const data = await getData(collection, filters)

      return data.docs.map(snapshot => ({
        ...snapshot.data(),
        createdAt: snapshot.createTime.toDate(),
        updatedAt: snapshot.updateTime.toDate()
      }))
    }
  }
}
