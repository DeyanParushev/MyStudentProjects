const Course = require('../models/Course');
const User = require('../models/User');

async function getTopThree() {
    var courses = Course
        .find({})
        .limit(3)
        .sort({ students: -1 })
        .lean();

    return courses;
}

async function getAll() {
    var courses = Course.find({})
        .sort({ createdAt: 1 })
        .lean();

    return courses;
}

async function create(course, userId) {
    var currentDate = new Date();
    var date = currentDate.getDate() + "/" +
        (currentDate.getMonth() + 1) + "/" +
        currentDate.getFullYear();

    if (course.title.length < 4) {
        throw 'Title must be longer than 4 characters.';
    }

    if (course.description.length < 20) {
        throw 'Description must be longer than 20 characters.';
    }

    if (!course.imageUrl.match(/^http/) || !course.imageUrl.match(/^https/)) {
        throw 'Url must start with http or https';
    }

    await Course.create({...course, creator: userId, createdAt: date });
}

async function getOne(id) {
    var course = await Course.findById(id)
        .populate('students').lean();

    return course;
}

async function update(id, course) {

    if (course.title.length < 4) {
        throw 'Title must be longer than 4 characters.';
    }

    if (course.description.length < 20) {
        throw 'Description must be longer than 20 characters.';
    }

    if (!course.imageUrl.match(/^http/) || !course.imageUrl.match(/^https/)) {
        throw 'Url must start with http or https';
    }

    if (course.duration < 1) {
        throw 'Duration must be larger than 0';
    };

    await Course.updateOne(course);

    var course = await Course.findById(id).lean();

    return course;
}

async function deleteOne(id) {
    await Course.deleteOne({ _id: id });
}

async function enroll(courseId, userId) {
    var course = await Course.findById(courseId);
    var user = await User.findById(userId);

    course.students.push(user._id);
    user.courses.push(course._id);

    await course.save();
    await user.save();
}

module.exports = {
    getAll,
    getTopThree,
    create,
    getOne,
    update,
    deleteOne,
    enroll,
}