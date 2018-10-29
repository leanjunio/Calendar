const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 * Bookings must have:
 * - Date (time included)
 * - Owner (Who created the booking)
 * - Room
 */

const BookingSchema = new Schema({
    date: {
        type: Date,
        default: Date.now()
    },
    owner: {
        type: String,       // TODO: Find a way to attach to a model
        required: true
    },
    room: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Booking', BookingSchema);