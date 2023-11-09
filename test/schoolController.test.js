const SchoolController = require("../app/controllers/schoolController");

// Mock de la conexión a la base de datos para las pruebas
const mockConnection = {
  query: jest.fn(),
};

// Crear una instancia de SchoolController con la conexión mock
const schoolController = new SchoolController();
schoolController.conecction = mockConnection;

describe("SchoolController", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe("listarAlumnos", () => {
    it("debe devolver una lista de alumnos", async () => {
      const mockAlumnos = [
        {
          idalumno: 1,
          nombre: "abel",
          fecha_nacimiento: "1999-03-16",
          email: "abel@gmail.com",
          telefono: "994324746",
        },
        {
          idalumno: 2,
          nombre: "mary",
          fecha_nacimiento: "2004-09-19",
          email: "mary@gmail.com",
          telefono: "970395549",
        },
        {
          idalumno: 3,
          nombre: "juan",
          fecha_nacimiento: "2000-01-01",
          email: "juan@gmail.com",
          telefono: "987654321",
        },
        {
          idalumno: 4,
          nombre: "luis",
          fecha_nacimiento: "2000-02-01",
          email: "luis@gmail.com",
          telefono: "987654322",
        },
        {
          idalumno: 5,
          nombre: "mateo",
          fecha_nacimiento: "2000-03-01",
          email: "mateo@gmail.com",
          telefono: "987654323",
        },
      ];
      mockConnection.query.mockResolvedValue(mockAlumnos);

      const req = {};
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };

      await schoolController.listarAlumnos(req, res);

      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith({
        message: "success",
        alumnos: mockAlumnos,
      });
    });
  });
});
