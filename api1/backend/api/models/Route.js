

module.exports = {
    connection: 'connectMongoD',
    attributes: {
        kml: {
            type: 'json'
        },
        line: {
            collection: 'line',
            via: 'route'
        },
        stops: {
            collection: 'stop',
            via: 'route'
        }
    }
};