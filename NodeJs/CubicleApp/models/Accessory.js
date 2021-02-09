const mongoose = require('mongoose');

const accessoryScheme = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    imageUrl: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
        maxlength: 100,
    }
});

module.exports = mongoose.model('Accessory', accessoryScheme);