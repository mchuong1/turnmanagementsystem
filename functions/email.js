/* eslint-disable camelcase */
const formData = require('form-data');
const Mailgun = require('mailgun.js');

const sendEmail = async (event) => {
  const {
    first_name, last_name, phoneNumber,
    address_line_1, address_line_2, city,
    state, zip, license_number, expiration_date
  } = JSON.parse(event.body);
  console.log(event.body)
  const DOMAIN = 'vieconnex.net';

  const mailgun = new Mailgun(formData);
  const mg = mailgun.client({
    username: 'api',
    key: process.env.REACT_APP_MAILGUN_API_KEY,
  });

  // const data = {
  //   from: 'V&Mi Nail Spa <support@vnminailspa.com>',
  //   to: 'business.mchuong@gmail.com',
  //   subject: `Get In Touch with ${name}`,
  //   text: `${message} reply back to ${email}`,
  // };

  // console.log('About to send email with data', data);

  const result = await mg.messages
    .create(DOMAIN, {
      from: 'VieConnex <support@vieconnex.net>',
      to: 'vienhong.connect@gmail.com',
      subject: `Get In Touch with ${first_name} ${last_name}`,
      text: `
      ${first_name} ${last_name} is looking for a job.
      Please contact using ${phoneNumber}
      License Number: ${license_number}
      Expiration Date: ${expiration_date}

      ${address_line_1}
      ${address_line_2}
      ${city}, ${state} ${zip}
      `,
    })
    .then((msg) => msg)
    .catch((err) => err);

  console.log(result);

  return result;
};

module.exports.handler = async (event) => {
  const result = await sendEmail(event);
  return {
    statusCode: result.status || 200,
    body: JSON.stringify(result),
  };
};
