const express = require("express");
const pool = require("../modules/pool");
const axios = require('axios')
const env = require('dotenv')
require('dotenv').config()

const router = express.Router();
const apiKey = process.env.API_KEY


router.get('/', (req, res) => {
  
  console.log("req.query", req.query);
  const qParam = req.query.q;
  const limitParam = req.query.limit;
  
  axios({
    method: "GET",
    url: `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${qParam}&limit=${limitParam}`,
  })
    .then((response) => {
      res.send(response.data);
      console.log(response);
    })
    .catch((error) => {
      console.log("Error when fetching GIFs from API:", error);
      res.sendStatus(200);
    });
})

module.exports = router;
