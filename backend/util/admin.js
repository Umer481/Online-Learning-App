const admin = require("firebase-admin");

var serviceAccount = require("../secrets/askademia-36826-firebase-adminsdk-fwfhi-152779dac7.json");

// var firebaseConfig = require("../secrets/firebase-config");
// firebase.initializeApp(firebaseConfig);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://askademia-36826.firebaseio.com",
  storageBucket: "askademia-36826.appspot.com"
});
const db = admin.firestore();

module.exports = { admin, db };
