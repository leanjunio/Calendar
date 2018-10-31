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
        if (err) throw err;
        else res.json(users);
    });
});

// Posts information to be saved on the Database
router.post('/registration', (req, res) => {

    // TODO: Convert so that it is saving data coming from the view
    const dataCheck = req.body.username && req.body.password && req.body.email;

    if (dataCheck) {
        const userData = {
            username: req.body.username,
            password: req.body.password,
            email: req.body.email
        }
    
        User.create(userData, (err, user) => {
            if (err) throw err;
            else {
                res.redirect('/success');
            }
        });
    } else {
        res.send('Missing parameteres');
    }
});

module.exports = router;