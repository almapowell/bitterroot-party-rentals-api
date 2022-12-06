const express = require("express");
const serverless = require("serverless-http");

const app = express();

const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    hello: "hi!",
  });
});

router.get("/test", (req, res) => {
  res.json({
    hello: "This is seriously so crazy I am amazed!",
  });
});

app.use("/.netlify/functions/api", router);

module.exports.handler = serverless(app);
