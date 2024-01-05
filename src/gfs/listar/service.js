
const conecction = require("../../../config/db");

class Service {
    static async listar() {
        let query = "select * from gfs";
        let result = await conecction.query(query);
        return result;
    }
}

module.exports = Service;