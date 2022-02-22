const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  let s = "Novi Sad";
  let a = "12h";
  res.status(200).json({ grad: s, vreme: a });
});

module.exports = router;
