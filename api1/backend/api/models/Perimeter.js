

module.exports = {
    connection: 'connectMongoD',
    attributes: {
        kml: {
            type: 'json'
        },
        school: {
            model: 'school',
            unique: true,
            required: true
        },
    }
};