// Server routing.
const express = require('express');
const router = express.Router();

// Middleware.
const auth = require('../../../middleware/auth');

// Validation.
const { check } = require('express-validator');

// Authentication controller.
const authController = require('../controllers/auth');


module.exports = router;
