
const conecction = require("../../config/db");

class Service {
    static async listar(idgf) {
        try {
            let query = idgf === 0 ? "select * from gfs" : `select * from gfs where idgf = ${idgf}`;
            let result = await conecction.query(query);
            return result;
        } catch (error) {
            console.log(error);
            return []
        }
    }

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

    static async editar(body) {
        try {
            const { idgf, nombre, telefono } = body;
            let query = `update gfs set nombre = '${nombre}', telefono = '${telefono}' where idgf = ${idgf}`;
            await conecction.query(query);
            return true;
        } catch (error) {
            console.log(error);
            return false
        }
    }

    static async eliminar(idgf) {
        try {
            let query = `delete from gfs where idgf = ${idgf}`;
            await conecction.query(query);
            return true;
        } catch (error) {
            console.log(error);
            return false
        }
    }

}

module.exports = Service;