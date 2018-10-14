const admin = require('firebase-admin')

const serviceAccount = require('../serviceAccountKey.json')
const settings = { timestampsInSnapshots: true }

admin
  .initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://luka-api.firebaseio.com'
  })
  .firestore().settings(settings)
