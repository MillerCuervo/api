

module.exports = {
    connection: 'connectMongoD',
    attributes: {
        bus: {
            model: 'bus'
        },
        detail_list: {
            collection: 'detail_list',
            via: 'list'
        }
    }
};