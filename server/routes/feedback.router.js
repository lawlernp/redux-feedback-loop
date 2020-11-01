const express = require("express");
const router = express.Router();
const pool = require("../modules/pool");

router.get("/", (req, res) => {
  console.log("GET /survey");
  pool
    .query('SELECT * from "feedback";')
    .then((result) => {
      res.send(result.rows);
    })
    .catch((error) => {
      console.log("Error GET /survey", error);
      res.sendStatus(500);
    });
});

router.post("/", (req, res) => {
  console.log(`submitting feedback`, req.body);

  let queryText = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
                   VALUES ($1, $2, $3, $4);`;
  pool
    .query(queryText, [
      req.body.feelings,
      req.body.understanding,
      req.body.support,
      req.body.comments,
    ])
    .then((result) => {
      res.sendStatus(201);
    })
    .catch((error) => {
      console.log(`Error submitting feedback`, error);
      res.sendStatus(500);
    });
});


module.exports = router;
