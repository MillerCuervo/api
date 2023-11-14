

module.exports = {
    connection: 'connectMongoD',
    attributes: {
        placa: {
            type: 'string',
            required: true
        },
        marca: {
            type: 'string',
            required: true
        },
        tipo: {
            type: 'string',
            required: true
        },
        subtipo: {
            type: 'string',
            required: true
        },
        modelo: {
            type: 'integer',
            required: true
        },
        color: {
            type: 'string',
            required: true
        },
        plazas: {
            type: 'integer',
            required: true
        },
        puertas: {
            type: 'required',
            required: true
        },
        categoria: {
            type: 'string',
            required: true
        },
        observacion: {
            type: 'string',
            required: false
        },
        owner: {
            model: 'owner',
            unique: true,
            required: true
        },
        school: {
            collection: 'school',
            via: 'bus',
            through: 'school_bus'
        },
        line: {
            model: 'line',
            unique: true,
            required: true
        },
        lists: {
            collection: 'list',
            via: 'bus'
        },
        location_histories: {
            collection: 'location_history',
            via: 'bus'
        },
        status: {
            collection: 'status',
            via: 'bus'
        }
    }
};