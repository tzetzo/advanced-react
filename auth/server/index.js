const express = require("express");
// const http = require("http");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const router = require("./router");
const mongoose = require("mongoose");
const cors = require('cors');

// DB setup
mongoose.connect(
  process.env.MONGODB_URL,
  { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true }
);

const app = express();

// App setup
// express middleware - any request will be passed to the middlewares
app.use(morgan("combined")); // morgan logs all incoming requests in the node console; for debugging
app.use(cors()); //allows requests from any domain;
app.use(bodyParser.json({ type: "*/*" })); // parses incoming requests assuming they are in JSON

// Endpoints
router(app);

// Server setup
const port = process.env.PORT || process.env.PORT;

app.listen(port, () => {
  console.log("Sever listening on: ", port);
});
// const server = http.createServer(app);
// server.listen(port);
// console.log("Sever listening on: ", port);
