const express = require("express");
const router = express.Router();
const { v4: uuidv4 } = require("uuid");
const fs = require("fs");

router.post("/upload", (req, res) => {
  const name = uuidv4();
  req.pipe(fs.createWriteStream(`./${name}.pdf`));
  res.status(200).json({ id: name });
});
router.get("/download/:id", (req, res) => {
  res.sendFile(`./${req.params.id}.pdf`, { root: "." });
});

module.exports = router;
