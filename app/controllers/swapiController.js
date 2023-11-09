const axios = require("axios");
const SwapiModel = require("../models/swapiModel");

class SwapiController {
  async listarPeliculas(req, res) {
    try {
      const result = await axios.get("https://swapi.dev/api/films/1");
      const Swapi = new SwapiModel(result.data);
      const dataTranslate = await Swapi.traducir();
      return res.status(200).json(dataTranslate);
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        message: "Error",
      });
    }
  }
}
module.exports = SwapiController;
