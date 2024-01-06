const Service = require('./service');

module.exports = {
    async agregar(event) {

        const body = JSON.parse(event.body);
        const add = await Service.agregar(body);

        if (!add) {
            return {
                statusCode: 400,
                body: JSON.stringify({ message: 'Error al agregar' }),
            };
        }

        return {
            statusCode: 200,
            body: JSON.stringify({ message: 'Agregado correctamente' }),
        };
    }
}