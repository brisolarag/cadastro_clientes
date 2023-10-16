const clientesModel = require('../models/clientesModel');


const getAll = async (request, response) => {
    const clientes = await clientesModel.getAll()
    return response.status(200).json(clientes);
}












module.exports = {
    getAll
}