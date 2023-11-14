

module.exports = {
    connection: 'connectMongoD',
    attributes: {
        ci: {
            type: 'string',
            required: true
        },
        nombres: {
            type: 'string',
            required: true
        },
        apellidos: {
            type: 'string',
            required: true
        },
        fechaNacimiento: {
            type: 'date',
            required: true
        },
        sexo: {
            type: 'string',
            enum: ['Masculino', 'Femenino', 'Otro'],
            required: true
        },
        profile: {
            collection: 'profile-user',
            via: 'user'
        },
        notifications: {
            collection: 'notification',
            via: 'user'
        }
    }
};