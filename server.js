const express = require("express");
const app = express();
const cors = require("cors");
const port = 8080;
const bodyParser = require("body-parser");

app.use(cors());

app.use(bodyParser.json());

app.use("/api", require("./server/api"));

app.get("/", (req, res) => res.send("HELLO PINTEREST"));

app.listen(port, () => console.log(`app listening on port ${port}!`));
