const express = require("express");
const swapi = require("./routes/swapi");
const school = require("./routes/school");
const app = express();

app.use(express.json());

app.use("/api/swapi", swapi);
app.use("/api/school", school);

module.exports = app;
