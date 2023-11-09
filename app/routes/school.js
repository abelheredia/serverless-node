const express = require("express");
const router = express.Router();
const SchoolController = require("../controllers/schoolController");
const apiSchool = new SchoolController();

router.get("/listarAlumnos", apiSchool.listarAlumnos);
router.post("/crearAlumno", apiSchool.crearAlumno);

module.exports = router;
