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
UserSchema.pre('validate', function(next) {
    bcrypt.genSalt(10, (err, result) => {
        if (err) return next(err);
        else {
            this.password = bcrypt.hashSync(this.password, result);
            next();
        }
    });
});

module.exports = mongoose.model('User', UserSchema);