
module.exports = {
    connection: 'connectMongoD',
    attributes: {
        nombre: {
            type: 'string',
            enum: ['Vacio', 'Medio', 'Lleno'],
            required: true
        },
        bus: {
            model: 'bus',
            unique: true,
            required: true
        },
    }
};