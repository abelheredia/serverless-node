
const conecction = require("../../config/db");

class Service {
    static async listar(idpersona) {
        try {
            let query = idpersona === 0 ? "select * from persona" : `select * from persona where idpersona = ${idpersona}`;
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
            let query = `insert into persona (nombre, telefono) values ('${nombre}', '${telefono}')`;
            await conecction.query(query);
            return true;
        } catch (error) {
            console.log(error);
            return false
        }
    }

    static async editar(body) {
        try {
            const { idpersona, nombre, telefono } = body;
            let query = `update persona set nombre = '${nombre}', telefono = '${telefono}' where idpersona = ${idpersona}`;
            await conecction.query(query);
            return true;
        } catch (error) {
            console.log(error);
            return false
        }
    }

    static async eliminar(idpersona) {
        try {
            let query = `delete from persona where idpersona = ${idpersona}`;
            await conecction.query(query);
            return true;
        } catch (error) {
            console.log(error);
            return false
        }
    }

}

module.exports = Service;