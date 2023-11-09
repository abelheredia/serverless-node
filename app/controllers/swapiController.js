const axios = require("axios");
const SwapiModel = require("../models/swapiModel");

class SwapiController {
  async listarPeliculas(req, res) {
    try {
      const result = await axios.get("https://swapi.dev/api/films/1");
      const Swapi = new SwapiModel(result.data);
      const dataTranslate = await Swapi.traducir();
      return res.status(200).json({
        message: "success",
        data: dataTranslate,
      });
    } catch (error) {
      console.log(error);
      return res.status(400).json({
        message: "error",
      });
    }
  }
}
module.exports = SwapiController;
