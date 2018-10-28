const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 * Bookings must have:
 * - Date (time included)
 * - Owner (Who created the booking)
 * - Room
 */

const UserSchema = new Schema({
    Date: {
        type: Date,
        required: true,
        defauled: Date.now()
    },
    Owner: {
        type: String,       // TODO: Find a way to attach to a model
        required: true
    },
    Room: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('User', UserSchema);