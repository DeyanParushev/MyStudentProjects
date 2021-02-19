const Hotel = require('../models/Hotel');
const User = require('../models/User');

async function getAll() {
    var hotels = await Hotel.find({}).lean();
    hotels.sort((a, b) => -(a.freeRooms > b.freeRooms) || +(a.freeRooms < b.freeRooms));
    return hotels;
}

async function getOne(_id) {
    var hotel = await Hotel.findById(_id).lean();
    return hotel;
}

async function create(hotel, ownerId) {
    if (await Hotel.exists({ name: hotel.name })) {
        throw 'Hotel exists';
    }

    if (hotel.freeRooms < 1 || hotel.freeRooms > 100) {
        throw 'Free rooms must be between 1 and 100';
    }
    var hotel = await Hotel.create({...hotel, owner: ownerId });
    console.log(hotel);
}

async function update(hotel) {
    if (hotel.name.length < 4) {
        throw 'Hotel name cannot be less than 4 letters';
    }

    if (hotel.city.length < 3) {
        throw 'Hotel city cannot be less than 3 letters';
    }

    if (hotel.freeRooms < 1 || hotel.freeRooms > 100) {
        throw 'Hotel rooms must be between 1 and 100';
    }

    await Hotel.updateOne(hotel);
}

async function deleteOne(id) {
    await Hotel.deleteOne({ _id: id });
};

async function addBooking(hotelId, userId) {
    var hotel = await Hotel.findById(hotelId);
    var user = await User.findById(userId);

    hotel.freeRooms--;
    hotel.usersBookedARoom.push(user._id);
    user.bookedHotels.push(hotel._id);

    await user.save();
    await hotel.save();
}

module.exports = {
    getAll,
    getOne,
    create,
    update,
    deleteOne,
    addBooking,
}
