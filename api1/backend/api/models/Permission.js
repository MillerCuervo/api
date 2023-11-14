
module.exports = {
    connection: 'connectMongoD',
    attributes: {
        nombre: {
            type: 'string',
            required: true
        },
        descripcion: {
            type: 'string',
            required: true
        }
    }
};