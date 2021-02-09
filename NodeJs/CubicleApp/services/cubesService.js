const Cube = require('../models/Cube');
const Accessory = require('../models/Accessory');

function getAll(query) {
    return Cube.find({}).lean();
}

function getOne(id) {
    return Cube.findById(id)
        .populate('Accessories')
        .lean();
}

function create(data) {
    let cube = new Cube(data);
    return cube.save();
}

function deleteCube(id) {
    return Cube.deleteOne({ _id: id });
}

function editCube(data) {
    return Cube.updateOne({}, {
        name: data.name,
        description: data.description,
        imageUrl: data.imageUrl,
        difficultyLevel: data.difficultyLevel
    });
}

async function attachAccessory(cubeId, accessoryId) {
    var cube = await Cube.findById(cubeId);
    var accessory = await Accessory.findById(accessoryId);

    cube.accessories.push(accessory);
    return cube.save();
};

module.exports = {
    getAll,
    getOne,
    create,
    deleteCube,
    editCube,
    attachAccessory,
}