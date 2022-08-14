const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors())

const transactionsController = require("./controllers/transactionsController.js");
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Welcome to the budgeting app !")
});

app.use((req, res, next) => {
    console.log("i am loving this!");
    next();
})


app.use("/transactions", transactionsController);

app.get("*", (req, res) => {
    res.status(404).json({error: "page not found"})
})

module.exports = app;