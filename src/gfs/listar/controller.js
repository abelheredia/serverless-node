const Service = require('./service');

module.exports = {
    async listar() {
        const data = await Service.listar();
        return {
            statusCode: 200,
            body: JSON.stringify({ data, }),
        };
    }
}
