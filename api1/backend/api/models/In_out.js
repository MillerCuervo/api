

module.exports = {
    connection: 'connectMongoD',
    attributes: {
        localizacion: {
            type: 'json' //descripcion:descripcion de donde sube|tipo:
        },
        descripcion: {
            type: 'string',
            required: true
        },
        tipo: {
            type: 'boolean',
            required: true
        }
    }
};