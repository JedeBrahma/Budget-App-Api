const express = require("express");
const transactions = express.Router();

const transactionsData = require("../models/transactions.js");
const { validateValues } = require("../models/validations");
// console.log(transactionsData["2"]);

// index -->
transactions.get("/", (req, res) => {
  res.json(transactionsData);
});
// show -->
transactions.get("/:arrayIndex", (req, res) => {
  // console.log(req.params);
  const { arrayIndex } = req.params;
  if (transactionsData[req.params.arrayIndex]) {
    res.json(transactionsData[arrayIndex]);
  } else {
    res.status(404).send("no transaction found - sorry");
  }
});
// create -->
transactions.post("/", validateValues, (req, res) => {
    transactionsData.push(req.body);
    res.json(transactionsData[transactionsData.length - 1]);
});

// destroy/delete -->
transactions.delete("/:arrayIndex", (req, res)=> {
    const {arrayIndex} = req.params
    const deletedTransaction = transactionsData.splice(arrayIndex, 1)
    res.status(200).json(deletedTransaction)
});

// update/edit/put -->
transactions.put("/:arrayIndex", (req,res) => {
    const {arrayIndex} = req.params
    transactionsData[arrayIndex] = req.body
    res.status(200).json(transactionsData[arrayIndex])
});

module.exports = transactions;
