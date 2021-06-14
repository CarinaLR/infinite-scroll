const express = require("express");
const app = express();
const port = 8080;
const bodyParser = require("body-parser");

app.use(bodyParser.json());

app.use("/", require("./server/api"));

app.get("/", (req, res) => res.send("HELLO PINTEREST"));

app.listen(port, () => console.log(`app listening on port ${port}!`));
