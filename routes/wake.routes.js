const {
    wakeServer,
  } = require("../controllers/wake.controllers");
  
  const router = require("express").Router();
  
  router.post("/", wakeServer);
  
  module.exports = router;