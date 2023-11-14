
module.exports = {
    connection: 'connectMongoD',
    attributes: {
        bus: {
            collection: 'bus',
            via: 'owner'
        }
    }
};