const {
  createContact,
  getAllContacts,
} = require("../controllers/contact.controllers");

const router = require("express").Router();

router.post("/", createContact);
router.get("/", getAllContacts);

module.exports = router;
