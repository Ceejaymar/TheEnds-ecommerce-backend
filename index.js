const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const router = require('./routes');
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/', router);

app.use((err, req, res, next) => {
  res.status(400).json({ error: err.toString() });
});

app.listen(port, () => {
  console.log(`App is running on port: ${port}`);
});