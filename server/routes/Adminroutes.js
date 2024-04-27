const express = require('express');
const router = express.Router();
const AdminModel = require('../models/AdminModel'); // Adjusted import statement

// POST route to create a new admin entry
router.post('/admin/post', async (req, res) => {
    try {
        // Extract data from the request body
        const bodyData = req.body;

        // Create a new Admin document using the AdminModel
        const newAdmin = new AdminModel(bodyData);

        // Save the newAdmin instance to the database
        const savedAdmin = await newAdmin.save();

        // Respond with the saved data
        res.status(201).json(savedAdmin);
    } catch (error) {
        // If an error occurs, respond with an error message
        console.error('Error creating admin entry:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// GET route to retrieve all admin entries
router.get('/admin', async (req, res) => {
    try {
    
        const adminData = await AdminModel.find({});
        
        // Respond with the retrieved data
        res.status(200).json(adminData);
    } catch (error) {
        // If an error occurs, respond with an error message
        console.error('Error retrieving admin entries:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

module.exports = router;
