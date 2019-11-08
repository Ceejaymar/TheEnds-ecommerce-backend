const apiKey = '';
const domain = 'sandboxf2813eac5d1e4139a21d269dd1e41fa8.mailgun.org';
const mailgun = require('mailgun-js')({ apiKey, domain });

const data = {
  from: 'the most lit <martinezcj2@gmail.com>',
  to: 'martinezcj2@gmail.com',
  subject: 'Wordddd',
  text: 'This is wild lit!'
};

mailgun.messages().send(data, function (err, body) {
  if (err) {
    console.log(err);
  }
  console.log(body);
});
