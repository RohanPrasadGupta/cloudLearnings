const express = require("express");
const router = express.Router();
const { saveFormData } = require("../service/handleForm");

// POST /api/forms
router.post("/forms", saveFormData);

module.exports = router;
