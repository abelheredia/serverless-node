const Service = require('./service');

module.exports = {
    async listar() {
        const data = await Service.listar();

        if (data.length === 0) {
            return {
                statusCode: 400,
                body: JSON.stringify({ message: 'Error al listar' }),
            }
        }

        return {
            statusCode: 200,
            body: JSON.stringify({ data, }),
        };
    }
}
