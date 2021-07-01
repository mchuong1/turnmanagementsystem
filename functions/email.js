
// using Twilio SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs
const sgMail = require('@sendgrid/mail')

module.exports.handler = async (event, content) => {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY)
  const msg = {
    to: 'mchuong1993@gmail.com', // Change to your recipient
    from: 'jdoe02602@gmail.com', // Change to your verified sender
    templateId: 'd-f3a2e81ec8c14554a73ee0d9ee688cc5',
  }
  sgMail
    .send(msg)
    .then(() => {
      console.log('Email sent')
    })
    .catch((error) => {
      console.error(error)
    })
    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json",
      },
      body: 'Email sent'
    }
}