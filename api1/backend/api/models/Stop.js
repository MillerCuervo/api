

module.exports = {
    connection: 'connectMongoD',
    attributes: {
       
        hora: {
            type: 'string',
            required: true
        },
        lat: {
            type: 'float',
            required: true
        },
        lng: {
            type: 'float',
            required: true
        },
        route: {
            model: 'route'
        }
    }
};