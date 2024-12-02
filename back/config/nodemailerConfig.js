const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: 'smtp.ethereal.email',
  port: 587,
  auth: {
      user: 'estrella.olson98@ethereal.email',
      pass: 'WDP2eBMcZB9676yrVZ'
  }
});

module.exports = transporter;
