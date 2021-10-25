const admin = require("firebase-admin")

admin.initializeApp({
  credential: admin.credential.applicationDefault(),
  databaseURL: "https://dac-node-gql-test-default-rtdb.firebaseio.com/"
})

const db = admin.database()

function hello() {
  const ref = db.ref("hello")
  return ref.once("value", snapshot => snapshot.val())
}

module.exports = {
  db,
  hello
}
