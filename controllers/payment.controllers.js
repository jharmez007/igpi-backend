const {
  verifySignature,
  initializeTransaction,
} = require("../helpers/helpers");

const User = require("../models/user.models");
const Payment = require("../models/payment.models");

class PaymentController {
  static async initializePayment(req, res) {
    const { amount, email, callback_url } = req.body;

    try {
      const transaction = await initializeTransaction({
        amount,
        email,
        callback_url,
      });

      if (!transaction.status)
        return res
          .status(500)
          .json({ message: transaction.message, success: false });

      res.status(200).json({
        success: true,
        message: "Payment initialized",
        data: transaction.data,
      });
    } catch (error) {
      res.status(500).json({ success: false, message: error.message, error });
    }
  }

  static async paystackWebhook(req, res) {
    const { event } = req.body;
    const { data } = req.body;
    const signature = req.headers["x-paystack-signature"];

    if (!verifySignature(req.body, signature)) {
      console.log({ message: "Signature not verified", success: false });
      return res
        .status(500)
        .json({ message: "Signature not verified", success: false });
    }

    if (!data.status) {
      console.log({ message: data.message, success: false });
      return res.status(500).json({ message: data.message, success: false });
    }

    if (data.status !== "success") {
      console.log({ message: data.gateway_response, success: false });
      return res
        .status(500)
        .json({ message: data.gateway_response, success: false });
    }

    try {
      if (
        (event === "charge.success" || event === "transfer.success") &&
        data.status === "success"
      ) {
        const {
          amount,
          reference,
          customer: { email },
          paid_at,
        } = data;

        const payment = await PaymentController.createPayment({
          amount,
          email,
          referenceId: reference,
          transactionId: data.id,
          paymentDate: paid_at,
        });

        const user = await User.findOne({ email });

        if (!user)
          return res.status(500).json({
            message: `User with email ${email} does not exist`,
            success: false,
          });

        user.hasPaymentBeenMade = true;
        await user.save();

        res.status(200).json({
          success: true,
          message: "Payment successfully verified",
          data: payment,
        });
      }
    } catch (error) {
      return res.status(500).json({ message: error?.message, success: false });
    }
  }

  static async createPayment(data) {
    const { amount, email, transactionId, referenceId, paymentDate } = data;

    try {
      const existingUser = await User.findOne({ email });

      if (!existingUser) {
        throw new Error(`User with email ${email} does not exist`);
      }

      const payment = await Payment.create({
        amount: amount / 100,
        user: existingUser?._id,
        referenceId,
        transactionId,
        paymentDate,
      });

      return {
        success: true,
        message: "Payment created successfully",
        data: payment,
      };
    } catch (error) {
      return { success: false, message: error.message, error };
    }
  }
}

module.exports = PaymentController;
