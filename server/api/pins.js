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

//retrive data by blocks of data.
// router.get("/", async (req, res, next) => {
//   try {
//     let dataBlock = [];
//     let start = req.query.start;
//     let count = req.query.count;
//     let jsonObj = JSON.parse(data);
//     console.log("jsonObj", jsonObj.length);

//     const pins = async (start, count) => {
//       for (let i = start; i < count; i++) {
//         dataBlock.push(jsonObj[i]);
//       }
//     };

//     if (dataBlock) {
//       res.status(200).send(dataBlock);
//     } else {
//       res.sendStatus(400);
//     }
//   } catch (error) {
//     next(error);
//   }
// });

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

/*
import React from "react";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";

const Home = (props) => {
  // state in our functional component, with React hooks
  const [pins, setPins] = React.useState([]);

  const getData = async () => {
    const { data } = await axios.get("/api");
    console.log("data =>", data);
    setPins(data);
  };

  React.useEffect(() => {
    getData();
  }, []);

  return (
    <div className="container">
      <section className="text-center mb-4">
        <div className="row wow fadeIn">
          <InfiniteScroll
            dataLength={pins.length}
            next={getData}
            hasMore={true}
            loader={<h3>Loading...</h3>}
          >
            {pins.map((pin) => (
              <div className="col-lg-3 col-md-6 mb-4" key={pin.id}>
                <div className="card">
                  <img
                    className="card-img-top images"
                    src="assets/img/blackLogo.png"
                    alt="..."
                  ></img>
                  <div className="card-body">
                    <p className="card-text">{pin.description}</p>
                  </div>
                  <label className="card-text">{pin.pinner.full_name}</label>
                </div>
              </div>
            ))}
          </InfiniteScroll>
        </div>
      </section>
    </div>
  );
};

export default Home;


HOOK USESEARCH

import { useEffect, useState, React } from "react";
import axios from "axios";

const useSearch = (query, pageNumber) => {
 // fetching and setting data with React hooks
  useEffect(() => {
    let cancel;
    axios({
      method: "GET",
      url: `/api/${query}`,
      params: { q: query, page: pageNumber },
      cancelToken: new axios.CancelToken((c) => (cancel = c)),
    })
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        if (axios.isCancel(error)) return;
      });
    return () => cancel();
  }, [query, pageNumber]);

  return null;
};

useSEarch
setPins((prevPins) => {
          return [
            ...new Set([
              ...prevPins,
              ...res.data.map((pin) => pin.pinner.full_name),
            ]),
          ];
        });

LAYOUT
<section className="text-center mb-4">
          <div className="home-container">
            <Home />
          </div>
        </section>
 */
