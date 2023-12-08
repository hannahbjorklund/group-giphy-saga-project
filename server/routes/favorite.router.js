const express = require("express");
const pool = require("../modules/pool");

const router = express.Router();

// return all favorite images
router.get("/", (req, res) => {
  const queryText = `
  SELECT * FROM "favorites";
`;
  pool
    .query(queryText)
    .then((result) => {
      console.log("GET request, favorites:", result.rows);
      res.send(result.rows);
    })
    .catch((err) => {
      console.log("Error in GET favorites", err);
      res.sendStatus(500);
    });
});

// add a new favorite
router.post("/", (req, res) => {
  const newFav = req.body;
  const queryText = `
    INSERT INTO "favorites"
      ("url")
      VALUES
      ($1);
  `;
  const queryValues = [newFav.name, newFav.category_id];
  pool
    .query(queryText, queryValues)
    .then((result) => {
      res.sendStatus(201);
    })
    .catch((err) => {
      console.log("Error in favorite POST", err);
      res.sendStatus(500);
    });
});

// update a favorite's associated category
router.put("/:id", (req, res) => {
  const updateFavorite = req.body;
  const favId = req.params.id;

  const queryText = `
    UPDATE "favorites"
      SET  
        "category_id"=$1, 
      WHERE
        "id"=$2;
  `;

  const queryValues = [updateFavorite.category_id, favId];

  pool
    .query(queryText, queryValues)
    .then((result) => {
      res.sendStatus(200);
    })
    .catch((err) => {
      console.log("Error in PUT favorites :id", err);
      res.sendStatus(500);
    });
  // req.body should contain a category_id to add to this favorite image
  res.sendStatus(200);
});

// delete a favorite
router.delete("/:id", (req, res) => {
  res.sendStatus(200);
});

module.exports = router;
