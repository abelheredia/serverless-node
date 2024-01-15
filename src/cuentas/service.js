
const conecction = require("../../config/db");

class Service {
    static async listar(idpersona) {
        try {
            let query = `select * from cuenta where idpersona = ${idpersona}`;
            let result = await conecction.query(query);
            return result;
        } catch (error) {
            console.log(error);
            return []
        }
    }

    static async agregar(body) {
        try {
            const { idpersona, nombre } = body;
            let query = `insert into cuenta (idpersona,nombre) values (${idpersona},'${nombre}')`;
            await conecction.query(query);
            return true;
        } catch (error) {
            console.log(error);
            return false
        }
    }

    static async editar(body) {
        try {
            const { idcuenta, nombre } = body;
            let query = `update cuenta set nombre = '${nombre}' where idcuenta = ${idcuenta}`;
            await conecction.query(query);
            return true;
        } catch (error) {
            console.log(error);
            return false
        }
    }

    static async eliminar(idcuenta) {
        try {
            let query = `delete from cuenta where idcuenta = ${idcuenta}`;
            await conecction.query(query);
            return true;
        } catch (error) {
            console.log(error);
            return false
        }
    }

}

module.exports = Service;