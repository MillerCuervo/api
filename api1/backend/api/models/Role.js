

module.exports = {
    connection: 'connectMongoD',
    attributes: {
        nombre: {
            type: 'string',
            required: true,
            unique: true
        },
        descripcion: {
            type: 'string',
            required: true
        }
    }
};