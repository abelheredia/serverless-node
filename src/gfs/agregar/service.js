
const conecction = require("../../../config/db");

class Service {
    static async agregar(body) {
        try {
            const { nombre, telefono } = body;
            let query = `insert into gfs (nombre, telefono) values ('${nombre}', '${telefono}')`;
            await conecction.query(query);
            return true;
        } catch (error) {
            console.log(error);
            return false
        }

    }
}

module.exports = Service;