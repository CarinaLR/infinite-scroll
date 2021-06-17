const express = require("express");
const router = express.Router();
const fs = require("fs");
//read json file to get data use in routes
const data = fs.readFileSync("nyc_ttp_pins.json", { encoding: "utf-8" });

//retrive all data as a json object.
router.get("/", async (req, res, next) => {
  try {
    let jsonObj = JSON.parse(data);
    console.log("jsonObj", jsonObj.length);
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
    let avoidDuplicates = new Set();
    let found = [];

    const pin = await jsonObj.map((ele) => {
      let find = ele.pin_join.visual_annotation;
      //loop through all the possible options to get the right data.
      for (let i = 0; i < find.length; i++) {
        let strArr = find[i].split(" ");
        strArr.map((words) => {
          if (words.includes(name)) {
            if (!avoidDuplicates.has(ele.id)) {
              avoidDuplicates.add(ele.id);
              found.push(ele);
            }
          }
        });
      }
      //get element name and compare to input.
      if (ele.board.name === name) {
        console.log("hit route");
        if (!avoidDuplicates.has(ele.id)) {
          avoidDuplicates.add(ele.id);
          found.push(ele);
        }
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
