const { newUserTemplate } = require("./templates");
const { newSubscribeTemplate } = require("./subscribeTemplate");
const { newContactTemplate } = require("./contactTemplate");

exports.sendNewUserEmail = (user) => {
  if (user) {
    const from = `IGPI <${process.env.MAIL_ID}>`;
    const to = user?.email;
    const subject = "✅ Welcome to IGPI";
    const html = newUserTemplate(user);

    return { from, to, subject, html };
  }
};

exports.sendNewSubscribeEmail = (subscribe) => {
  if (subscribe) {
    const from = `Chinelo from IGPI <${process.env.MAIL_ID}>`;
    const to = subscribe?.email;
    const subject = "✅ Welcome to IGPI";
    const html = newSubscribeTemplate(subscribe);

    return { from, to, subject, html };
  }
};

exports.sendNewContactEmail = (contact) => {
  if (contact) {
    const from = `Chinelo from IGPI <${process.env.MAIL_ID}>`;
    const to = contact?.email;
    const subject = "✅ Welcome to IGPI";
    const html = newContactTemplate(contact);

    return { from, to, subject, html };
  }
};
