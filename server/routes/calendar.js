const router = require('express').Router();

/**
 * Calendar Routes
 * NOTE: There's an automatic 'calendar' preceding the first '/'
 * - GET: /
 * - POST: /
 */

router.get('/', (req, res) => {
    res.send('TODO: Get calendar view with complete schedules');
});

router.post('/', (req, res) => {
    res.send('TODO: Post booking to mongoose');
});

module.exports = router;