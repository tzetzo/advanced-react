const express = require("express");
// const http = require("http");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const router = require("./router");

const app = express();

// App setup
// express middleware - any request will be passed to the middlewares
app.use(morgan("combined")); // morgan logs all incoming requests in the node console; for debugging
app.use(bodyParser.json({ type: "*/*" })); // parses incoming requests assuming they are in JSON

// Endpoints
router(app);

// Server setup
const port = process.env.PORT || 3090;

app.listen(port, () => {
  console.log("Sever listening on: ", port);
});
// const server = http.createServer(app);
// server.listen(port);
// console.log("Sever listening on: ", port);
