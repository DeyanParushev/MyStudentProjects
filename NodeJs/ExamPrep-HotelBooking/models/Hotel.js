const mongoose = require('mongoose');

const hotelScheme = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minLength: 4,
        tags: { type: [String], index: true },
    },
    city: {
        type: String,
        required: true,
        minLength: 3,
    },
    imageUrl: {
        type: String,
        required: true,
        validate: /^https?/
    },
    freeRooms: {
        type: Number,
        min: 1,
        max: 100,
    },
    owner: {
        type: String,
        required: true,
    },
    usersBookedARoom: [{
        type: mongoose.Types.ObjectId,
        ref: 'User',
    }]
});

module.exports = mongoose.model('Hotel', hotelScheme);