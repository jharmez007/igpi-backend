const nodemailer = require("../mail_service/index");

const { sendNewUserEmail } = require("../helpers/emailFunctions");
const User = require("../models/user.models");

const registerUser = async (req, res) => {
  const email = req.body.email;
  const existingUser = await User.findOne({ email });

  if (existingUser) {
    return res.status(400).json({
      success: false,
      message: `User with email ${email} already exists`,
    });
  }

  const passportPhoto = req.file;


  if (!passportPhoto) {
    return res
      .status(400)
      .json({ success: false, message: "Passport photo is required." });
  }

  try {
    const newUser = await User.create({
      ...req.body,
      passportPhoto: passportPhoto?.path,
    });

    const emailData = sendNewUserEmail(newUser);
    await nodemailer.send(emailData);

    res
      .status(201)
      .json({ success: true, message: "User created", data: newUser });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

module.exports = {
  registerUser,
};
