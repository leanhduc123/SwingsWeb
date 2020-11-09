const express = require("express");
const path = require("path");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const multer = require("multer");
const ioCreator = require("socket.io");
const http = require("http");

const app = express();
const app = express();
const server = http.createServer(app);
const io = ioCreator(server);

app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.get("/", (req,res) => {
    console.log("I get /");
    res.send("Hello. This is root path");
})

app.listen(8080, () => {
    console.log("The app is running")
})