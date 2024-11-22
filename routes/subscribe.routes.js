const { createSubscribe } = require("../controllers/subscribe.controllers");

const router = require("express").Router();

router.post("/", createSubscribe);

module.exports = router;
