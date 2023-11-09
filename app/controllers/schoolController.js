require("dotenv").config();
const conecction = require("../config/db");

class SchoolController {
  async listarAlumnos(req, res) {
    try {
      let query = "select * from alumno";
      let result = await conecction.query(query);
      return res.status(200).json({
        message: "success",
        alumnos: result,
      });
    } catch (error) {
      console.log(error);
      return res.status(400).json({
        message: "error",
      });
    }
  }

  async crearAlumno(req, res) {
    try {
      const { nombre, fecha_nacimiento, email, telefono } = req.body;
      let query = `insert into alumno (nombre, fecha_nacimiento, email, telefono) values ('${nombre}', '${fecha_nacimiento}', '${email}', '${telefono}')`;
      conecction.query(query);
      return res.status(200).json({
        message: "success",
      });
    } catch (error) {
      console.log(error);
      return res.status(400).json({
        message: "error",
      });
    }
  }
}

module.exports = SchoolController;
