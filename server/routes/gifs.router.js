const express = require("express");
const pool = require("../modules/pool");

const router = express.Router();

console.log("req.query", req.query);
  const qParam = req.query.qparam;

  axios({
    method: "GET",
    url: `api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${qParam}`,
  })
    .then((response) => {
      res.send(response.data);
      console.log(response);
    })
    .catch((error) => {
      console.log("Error when fetching GIFs from API:", error);
      res.sendStatus(200);
    });