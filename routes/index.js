const express = require('express');
const router = express.Router();
const controller = require('../controllers/controllers');

module.exports = function() {
    router.get('/', controller.landing)
    router.post('/', controller.landingPost)

    return router;
} 