const admin = require("firebase-admin");
let serviceAccount;

if(process.env.FIREBASE_KEY) {
  serviceAccount =  JSON.parse(process.env.FIREBASE_KEY);
}
else {
  serviceAccount = require("./firebase-admin-key.json");
}

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://theends.firebaseio.com"
});

module.exports = admin;