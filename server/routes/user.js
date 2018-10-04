const router = require('express').Router();
const User = require('../models/users');

/**
 * User Routes
 * NOTE: There's an automatic '/user' preceding the routes
 * - GET: /user/registration
 * - POST: /user/registration
 */

//  Returns a list of all the registered users
router.get('/registration', (req, res) => {

    // Get all registered users
    User.find({}, (err, users) => {
        console.log(users);
        if (err) throw err;
        else res.json(users);
    })
});

// Posts information to be saved on the Database
router.post('/registration', (req, res) => {

    // TODO: Convert so that it is saving data coming from the view
    // TODO: Have bcrypt process the passwords to ensure security
    // Hash passwords

    const testData = {
        username: 'leanjunio',
        password: 'password123',
        email: 'leanjunio@live.com'
    }

    User.create(testData, (err, user) => {
        if (err) throw err;
        else {
            console.log(`CREATING USER`);
            res.redirect('/success');
        }
    });
});

module.exports = router;