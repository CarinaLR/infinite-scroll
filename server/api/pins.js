const express = require("express");
const router = express.Router();
const fs = require("fs");

const data = fs.readFileSync("nyc_ttp_pins.json", { encoding: "utf-8" });

router.get("/", async (req, res, next) => {
  try {
    console.log("I'm here!");
    res.status(200).send(data);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
