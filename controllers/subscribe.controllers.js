const nodemailer = require("../mail_service/index");

const { sendNewSubscribeEmail } = require("../helpers/emailFunctions");
const Subscribe = require("../models/subscribe.models");

const createSubscribe = async (req, res) => {
  const email = req.body.email;
  const existingSubscribe = await Subscribe.findOne({ email });

  if (existingSubscribe) {
    return res.status(400).json({
      success: false,
      message: `Subscribe with email ${email} already exists`,
    });
  }

  try {
    const newSubscribe = await Subscribe.create(req.body);

    const emailData = sendNewSubscribeEmail(newSubscribe);
    await nodemailer.send(emailData);

    res
      .status(201)
      .json({
        success: true,
        message: `Subscriber created`,
        data: newSubscribe,
      });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

module.exports = {
  createSubscribe,
};
