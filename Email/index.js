/**
 * E / 18 / 173
 * Kasthuripitiya K.A.I.M.
 * Automated Mail Sender
 * 17/06/2022
 */

const nodemailer = require("nodemailer");
const secure_configuration = require("./secure");

//All the security_configs are in a seperate file for security purposes
const transporter = nodemailer.createTransport({
  host: secure_configuration.HOST,
  port: secure_configuration.PORT,
  secure: false,
  service: secure_configuration.SERVICE,
  auth: {
    user: secure_configuration.EMAIL_USERNAME,
    pass: secure_configuration.PASSWORD,
  },
});

const mailConfigurations = {
  // It should be a string of sender email
  from: `Ishan Maduranga ${secure_configuration.EMAIL_FROM}`,

  // Comma Separated list of mails
  to: secure_configuration.EMAIL_LIST_TO,

  // send the list as bcc or cc
  // bcc: secure_configuration.EMAIL_LIST_BCC,
  // cc: secure_configuration.EMAIL_LIST_CC,

  // Subject of Email
  subject: "Sending Email using Node.js",

  // This would be the text of email body
  text:
    "Hi! There, You know I am using the" +
    " NodeJS Code along with NodeMailer " +
    "to send this email.",

  attachments: [
    {
      filename: "test.txt",
      content: "Hello, Mail For Testing",
    },
  ],
};

// Send Mail to the given list of mails , if sending fails log it to the console
transporter.sendMail(mailConfigurations, (error, info) => {
  if (error) throw error;
  console.log("Email Sent Successfully");
  console.log(info);
});
