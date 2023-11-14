
module.exports = {
    connection: 'connectMongoD',
    attributes: {
        nombre: {
            type: 'string',
            required: true
        },
        color: {
            type: 'string',
            required: true
        },
        tarifa: {
            type: 'float',
            required: true
        },
        bus: {
            collection: 'bus',
            via: 'line'
        },
        route: {
            model: 'route',
            unique: true,
            required: true
        }
    }
};