const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        tags: { type: [String], index: true },
    },
    description: {
        type: String,
        required: true,
        maxLength: 50,
    },
    imageUrl: {
        type: String,
        required: true,
    },
    duration: {
        type: String,
        required: true,
    },
    createdAt: {
        type: String,
        required: true,
    },
    students: [{
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }],
    creator: {
        type: String,
        ref: 'User',
        required: true,
    }
});

module.exports = mongoose.model('Course', courseSchema);