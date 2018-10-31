const router = require('express').Router();
const Booking = require('../models/booking');

/**
 * Calendar Routes
 * NOTE: There's an automatic 'calendar' preceding the first '/'
 * - GET: /
 * - POST: /
 */
 
router.get('/', (req, res) => {

    Booking.find({}, (err, bookings) => {
        if (err) throw err;
        else res.json(bookings);
    })
});

router.post('/', (req, res) => {
    const dataCheck = req.body.owner && req.body.room;

    if (dataCheck) {
        const userData = {
            owner: req.body.owner,
            room: req.body.room,
        }

        Booking.create(userData, (err, booking) => {
            if (err)
                throw err;
            else
                res.send(booking)
        })
    } else {
        res.send('Missing parameteres');
    }

});

module.exports = router;