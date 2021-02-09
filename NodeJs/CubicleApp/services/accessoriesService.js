const Accessory = require('../models/Accessory');

function getAll(query) {
    return Accessory.find({}).lean();
};

function create(data) {
    var accessory = new Accessory(data);
    return accessory.save();
}

function getOne(id) {
    return Accessory.findById(id).lean();
}

module.exports = {
    getAll,
    getOne,
    create,
}