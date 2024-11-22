const nodemailer = require("nodemailer");
const { config } = require("./config");

const send = async (data) => {
  const transporter = nodemailer.createTransport(config);
  transporter.sendMail(data, (err, info) => {
    if (err) {
      console.log("error sending mail", err);
    } else {
      console.log("success sending mail", info.response);
      return info.response;
    }
  });
};

module.exports = { send };
