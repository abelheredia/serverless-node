
const conecction = require("../../../config/db");

class Service {

    static async listar() {
        try {
            let query = "select * from gfs";
            let result = await conecction.query(query);
            return result;
        } catch (error) {
            console.log(error);
            return []
        }

    }
}

module.exports = Service;