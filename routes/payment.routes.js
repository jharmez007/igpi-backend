const {
  initializePayment,
  paystackWebhook,
} = require("../controllers/payment.controllers");

const router = require("express").Router();

router.post("/initializePayment", initializePayment);
router.post("/paystackWebhook", paystackWebhook);

module.exports = router;
