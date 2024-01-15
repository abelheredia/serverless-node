
const Service = require('./service');

const listar = async (idpersona) => {
    const data = await Service.listar(idpersona);

    if (data.length === 0) {
        return {
            statusCode: 400,
            body: JSON.stringify({ message: 'Error al listar' }),
        }
    }

    return {
        statusCode: 200,
        body: data.length === 1 ? JSON.stringify(data[0]) : JSON.stringify({ data }),
    };
}

const agregar = async (event) => {

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

const editar = async (event) => {

    const body = JSON.parse(event.body);
    const edit = await Service.editar(body);

    if (!edit) {
        return {
            statusCode: 400,
            body: JSON.stringify({ message: 'Error al editar' }),
        };
    }

    return {
        statusCode: 200,
        body: JSON.stringify({ message: 'Editado correctamente' }),
    };

}

const eliminar = async (idcuenta) => {

    const del = await Service.eliminar(idcuenta);

    if (!del) {
        return {
            statusCode: 400,
            body: JSON.stringify({ message: 'Error al eliminar' }),
        };
    }

    return {
        statusCode: 200,
        body: JSON.stringify({ message: 'Eliminado correctamente' }),
    };
}

module.exports = {
    handler: async (event) => {
        if (event.httpMethod === 'GET') {
            const idpersona = event.pathParameters ? event.pathParameters.idpersona : 0;
            return listar(idpersona);
        } else if (event.httpMethod === 'POST') {
            return agregar(event);
        } else if (event.httpMethod === 'PUT') {
            return editar(event);
        } else if (event.httpMethod === 'DELETE') {
            const idcuenta = event.pathParameters ? event.pathParameters.idcuenta : 0;
            return eliminar(idcuenta);
        } else {
            return {
                statusCode: 405,
                body: JSON.stringify({ message: 'Method Not Allowed' }),
            };
        }
    }
}