const checkToken = (req, res, next) => {
const { token } = req.body;

admin.auth().verifyIdToken(token)
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