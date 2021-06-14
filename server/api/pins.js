const express = require("express");
const router = express.Router();
const fs = require("fs");
//read json file to get data use in routes
const data = fs.readFileSync("nyc_ttp_pins.json", { encoding: "utf-8" });

//retrive all data as a json object.
router.get("/", async (req, res, next) => {
  try {
    console.log("I'm here!");
    let jsonObj = JSON.parse(data);
    res.status(200).send(jsonObj);
  } catch (error) {
    next(error);
  }
});

//search data by a specific input.
router.get("/:name", async (req, res, next) => {
  try {
    const { name } = req.params;
    console.log(`${name}`);
    let jsonObj = JSON.parse(data);
    let found = [];
    const pin = await jsonObj.map((ele) => {
      if (ele.board.name === name) {
        console.log("hit route");
        found.push(ele);
      }
    });
    if (found) {
      res.status(200).send(found);
    } else {
      res.sendStatus(400);
    }
  } catch (error) {
    next(error);
  }
});

module.exports = router;
