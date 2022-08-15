const express = require("express");
const app = require("./app.js");


require("dotenv").config();

const PORT = process.env.PORT || 3003;

app.listen(PORT, () => {
    console.log(`App live on port ${PORT}`)
});