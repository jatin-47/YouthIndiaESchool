const express = require('express');
const router = express.Router();

const {GoogleCalendarInitView, GoogleCalendarRedirectView} = require('../controllers/calendar');

router.route('/init').get(GoogleCalendarInitView);
router.route('/redirect').get(GoogleCalendarRedirectView);

module.exports = router;