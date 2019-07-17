const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const Lender = require("../models/Lender");


router.post("/", (req, res) =>{
	lender = req.body;
  Lender(lender)
    .save()
    .then(result => {
      console.log(result);
      res.status(201).json({
        message: "Handling POST requests to /user",
        createdLender: result
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
});

router.get("/", (req, res) => {
  Lender.find(req.body)
    .exec()
    .then(doc => {
      console.log("From database", doc);
      if (doc) {
        res.status(200).json(doc);
      } else {
        res
          .status(404)
          .json({ message: "No valid entry found for provided ID" });
      }
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: err });
    });
});




module.exports = router;
