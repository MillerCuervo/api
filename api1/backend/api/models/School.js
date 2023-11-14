

module.exports = {
    connection: 'connectMongoD',
    attributes: {
        bus: {
            collection: 'bus',
            via: 'school',
            through: 'school_bus'
        },
        students: {
            collection: 'student',
            via: 'school'
        },
        perimeter: {
            collection: 'perimeter',
            via: 'school'
        }
    }
};