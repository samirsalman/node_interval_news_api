const express = require("express");
const router = express.Router();
const axios = require("axios");

var lastUpdate = "";

setInterval(() => {
  axios
    .get("http://newsapi.org/v2/top-headlines?")
    .then(response => {
      console.log("Updated news: ", Date.now());
      lastUpdate = response.data;
    })
    .catch(error => {
      console.log(error);
    });
}, 900000);

router.get("/last", (req, res, next) => {
  res.send(lastUpdate);
});

module.exports = router;
