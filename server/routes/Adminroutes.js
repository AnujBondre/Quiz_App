const express = require('express');
const router = express.Router();
const AdminModel = require('../models/Adminmodel');

// Your routes definitions here...

// Route to create a new admin record
router.post('/admin', (req, res) => {
    // Implementation here...
});

// Route to get all admin records
router.get('/admin', (req, res) => {
    // Implementation here...
});

// Route to get a single admin record by ID
router.get('/admin/:id', (req, res) => {
    // Implementation here...
});

// Route to update an admin record
router.put('/admin/:id', (req, res) => {
    // Implementation here...
});

// Route to delete an admin record
router.delete('/admin/:id', (req, res) => {
    // Implementation here...
});

module.exports = router;
