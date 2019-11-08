const firebase = require('./firebase');

const checkToken = (req, res, next) => {
  const { token } = req.body;

  firebase.auth().verifyIdToken(token)
    .then(function(decodedToken) {
      const uid = decodedToken.uid;
      next();
    }).catch(function(error) {
      res.json('ERROR!!!!')
    });
}

module.exports = {
  checkToken
}
