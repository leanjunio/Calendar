const bcrypt = require('bcrypt-nodejs');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 * Users must have:
 * - username
 * - email
 * - password
 */

const UserSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    }
});

// Hash passwords before saving to database
UserSchema.pre('save', (next) => {
    const user = this;
    bcrypt.hash(user.password, 10, (err, hash) => {
        if (err) throw err;

        user.password = hash;
        next();
    });
});

module.exports = mongoose.model('User', UserSchema);