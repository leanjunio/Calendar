const router = require('express').Router();

/**
 * User Routes
 * NOTE: There's an automatic '/user' preceding the routes
 * - GET: /user/registration
 * - POST: /user/registration
 */
router.get('/registration', (req, res) => {
    res.send('TODO: respond with registration view from client');
});

router.post('/registration', (req, res) => {
    res.send('TODO: Post mock data to mongoose');
});

module.exports = router;