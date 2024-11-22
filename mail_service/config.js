const config = {
  service: "gmail",
  host: process.env.MAIL_HOST,
  port: process.env.MAIL_HOST_PORT,
  secure: true,
  auth: {
    user: process.env.MAIL_ID,
    pass: process.env.MP,
  },
};

module.exports = { config };
