const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 * Bookings must have:
 * - Date (time included)
 * - Owner (Who created the booking)
 * - Description (Room number, etc)
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
    Description: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('User', UserSchema);