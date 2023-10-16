const connection = require('./connection');


const getAll = async () => {
    const query = 'SELECT * FROM clientes'
    const [clientes] = await connection.execute(query);
    return clientes;
}











module.exports = {
    getAll
}