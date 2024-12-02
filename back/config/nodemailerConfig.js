const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: 'smtp.ethereal.email',
  port: 587,
  auth: {
      user: 'corrine.lang@ethereal.email',
      pass: 'qYnFz3QDcj6W9AzWf2'
  }
});

module.exports = transporter;
