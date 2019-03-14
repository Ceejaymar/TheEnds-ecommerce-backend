const apiKey = 'e7615a9a37efb39ecd72ecbce4f25c24-de7062c6-1d9ae5b2';
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