const admin = require('firebase-admin')

const firestore = admin.firestore()

const getData = async (queryRef, filters) => {
  filters.forEach(filter => {
    queryRef = queryRef.where(filter.field, filter.operator, filter.value)
  })
  return queryRef.get()
}

module.exports = (collectionName) => {
  const collection = firestore.collection(collectionName)

  return {
    async create (collectionInformation) {
      const ref = await collection.add(collectionInformation)
      return this.findById(ref.id)
    },
    async updateOne (filters, collectionInformation) {
      const obj = await this.findOne(filters)

      await collection
        .doc(obj.id)
        .update(collectionInformation)

      return this.findById(obj.id)
    },
    async findById (id) {
      const snapshot = await collection
        .doc(id)
        .get()

      return {
        ...snapshot.data(),
        id,
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
          id: snapshot.id,
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
        id: snapshot.id,
        createdAt: snapshot.createTime.toDate(),
        updatedAt: snapshot.updateTime.toDate()
      }))
    }
  }
}
