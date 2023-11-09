const express = require("express");
const router = express.Router();
const SwapiController = require("../controllers/swapiController");
const apiSwapi = new SwapiController();

router.get("/", apiSwapi.listarPeliculas);

module.exports = router;
