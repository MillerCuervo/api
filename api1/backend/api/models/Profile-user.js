
module.exports = {
    connection: 'connectMongoD',
    attributes: {
        username: {
            type: 'string',
            required: true
        },
        email: {
            type: 'email',
            required: true
        },
        password: {
            type: 'string',
            password: true,
            required: true
        },
        foto: {
            type: 'string'
        },
        direccion: {
            type: 'json'
        },
        user: {
            model: 'user',
            unique: true
        }
    }
};