const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        tags: { type: [String], index: true },
    },
    email: {
        type: String,
        required: true,
        tags: { type: [String], index: true },
    },
    password: {
        type: String,
        required: true,
    },
    bookedHotels: [{
        type: mongoose.Types.ObjectId,
        ref: 'Hotel',
    }],
    offeredHotels: [{
        type: mongoose.Types.ObjectId,
        ref: 'Hotel',
    }],
});

module.exports = mongoose.model('User', userSchema);