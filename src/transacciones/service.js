
const conecction = require("../../config/db");

class Service {
    static async listar(idcuenta) {
        try {
            let query = `select * from transaccion where idcuenta = ${idcuenta}`;
            console.log(query)
            let result = await conecction.query(query);
            return result;
        } catch (error) {
            console.log(error);
            return []
        }
    }

    static async agregar(body) {
        try {
            const { idcuenta, tipo, monto, fecha } = body;
            let query = `insert into transaccion (idcuenta, tipo, monto, fecha) values (${idcuenta}, '${tipo}', ${monto}, '${fecha}')`;
            await conecction.query(query);
            return true;
        } catch (error) {
            console.log(error);
            return false
        }
    }

    static async editar(body) {
        try {
            const { idtransaccion, monto } = body;
            const query = `update transaccion set monto = ${monto} where idtransaccion = ${idtransaccion}`;
            await conecction.query(query);
            return true;
        } catch (error) {
            console.log(error);
            return false
        }
    }

    static async eliminar(idtransaccion) {
        try {
            let query = `delete from transaccion where idtransaccion = ${idtransaccion}`;
            await conecction.query(query);
            return true;
        } catch (error) {
            console.log(error);
            return false
        }
    }

}

module.exports = Service;