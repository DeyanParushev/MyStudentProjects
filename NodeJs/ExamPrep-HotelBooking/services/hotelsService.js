const Hotel = require('../models/Hotel');

async function getAll() {
    var hotels = await Hotel.find({}).lean();
    hotels.sort(function(a, b) {
        return a.freeRooms - b.freeRooms;
    });

    return hotels;
}

async function getOne(_id) {
    var hotel = await Hotel.findById(_id).populate('owner').lean();
    return hotel;
}

async function create(hotel, ownerId) {
    console.log(hotel);
    if (await Hotel.exists({ name: hotel.name })) {
        throw 'Hotel exists';
    }

    if (hotel.freeRooms < 1 || hotel.freeRooms > 100) {
        throw 'Free rooms must be between 1 and 100';
    }

    var hotel = await Hotel.create({...hotel, owner: ownerId });
}

module.exports = {
    getAll,
    getOne,
    create
}